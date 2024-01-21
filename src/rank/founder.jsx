import MonthNavigation from "./MonthNavigation";
import supabase from "../config/supabaseClient";
import React, { useState, useEffect } from "react";

export default function Founder() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [users, setUsers] = useState([]);

  //날짜 설정 부분
  const changeMonth = (increment) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + increment);
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    let year = currentMonth.getFullYear();
    let month = currentMonth.getMonth() + 1;

    const dateFormat = (date) => {
      let dateFormat2 =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1 < 9
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) +
        "-" +
        (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());
      return dateFormat2;
    };

    let startday = dateFormat(new Date(year, month - 1, 1)); //startday:  2024-01-01
    let endday = dateFormat(new Date(year, month, 0)); //endday:  2024-01-31

    const fetchUsersAndMeetings = async () => {
      let { data: activeUsers, error: userError } = await supabase
        .from("users")
        .select("name, age")
        .eq("activation", true);

      if (userError) {
        console.error(userError.message);
        return;
      }

      const usersWithFoundCounts = await Promise.all(
        activeUsers.map(async (user) => {
          let { data: userData, error: getError } = await supabase
            .from("meeting")
            .select("*", { count: "exact" })
            .eq("name", user.name)
            .eq("founder", true)
            .gte("meeting_date", startday)
            .lte("meeting_date", endday);

          if (getError) {
            console.error(getError.message); // Logging the error for debugging
            return { ...user, meetingCount: 0 }; // Return user with meetingCount set to 0 in case of an error
          }

          const meetingCount = userData ? userData.length : 0;
          return { ...user, meetingCount: meetingCount };
        })
      );

      // meetingCount가 0인 사용자 제외
      const filteredUsers = usersWithFoundCounts.filter(
        (user) => user.meetingCount > 0
      );

      setUsers(filteredUsers.sort((a, b) => b.meetingCount - a.meetingCount));
    };

    fetchUsersAndMeetings();
  }, [currentMonth]);

  return (
    <div className='dark flex flex-col justify-between  h-screen bg-gray-800 text-white'>
      <header className='flex items-center justify-between px-6 py-4 bg-green-500'>
        <h1 className='text-1xl font-bold text-white-900'>
          {" "}
          <span>T C R C</span>
          <br />
          <span>개설랭킹</span>
        </h1>
      </header>
      <MonthNavigation currentMonth={currentMonth} changeMonth={changeMonth} />
      <main className='flex-1 overflow-y-auto p-3 bg-gray-800'>
        <div className='rounded-lg overflow-hidden bg-gray-700 p-4 pt-1 mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2'>
          <table class='w-full caption-bottom text-sm'>
            <thead class='border-b'>
              <tr class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                <th class='h-12 px-4 text-middle align-middle font-medium text-muted-foreground '>
                  순위
                </th>
                <th class='h-12 px-4 text-middle align-middle font-medium text-muted-foreground '>
                  이름(년생)
                </th>
                <th class='h-12 px-4 text-middle align-middle font-medium text-muted-foreground '>
                  개설횟수
                </th>
              </tr>
            </thead>
            <tbody class='border-0'>
              {users.map((user, index) => (
                <tr
                  class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'
                  key={index}
                >
                  <td class='p-4 align-middle'>{index + 1}</td>
                  <td class='p-4 align-middle'>{`${user.name}(${user.age})`}</td>
                  <td class='p-4 align-middle'>{user.meetingCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
