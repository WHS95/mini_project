
import React, { useState } from "react";
import MonthNavigation from "./MonthNavigation";

export default function Founder() {

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const changeMonth = (increment) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + increment);
    setCurrentMonth(newMonth);
  };

  return (
    <div className='dark flex flex-col justify-between  h-screen bg-gray-800 text-white'>
      <header className='flex items-center justify-between px-6 py-4 bg-green-500'>
        <h1 className='text-1xl font-bold text-gray-900'>
          {" "}
          <span>T C R C</span>
          <br />
          <span>개설 왕</span>
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
                  참여횟수
                </th>
              </tr>
            </thead>
            <tbody class='border-0'>
              <tr class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                <td class='p-4 align-middle '>1</td>
                <td class='p-4 align-middle '>서우혁</td>
                <td class='p-4 align-middle '>15</td>
              </tr>
              <tr class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                <td class='p-4 align-middle '>2</td>
                <td class='p-4 align-middle '>전현진</td>
                <td class='p-4 align-middle '>12</td>
              </tr>
              <tr class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                <td class='p-4 align-middle '>3</td>
                <td class='p-4 align-middle '>김건우</td>
                <td class='p-4 align-middle '>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
