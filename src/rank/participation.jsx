// import { Button } from '@chakra-ui/react'
// import { PopoverTrigger, PopoverContent, Popover } from '@chakra-ui/react'

// import { useParams, Link } from "react-router-dom";
// import { useState } from "react";
import React, { useState } from "react";
import MonthNavigation from "./MonthNavigation";

export default function Participation() {
  // const [message, setMessage] = useState(null);

  // function callHelloWorldRestApi() {

  //   retrieveHelloWorldPathVariable(username,authContext.token)
  //     .then((res) => successfulResponse(res))
  //     .catch((res) => errorResponse(res.data))
  //     .finally(console.log("retrieveHelloWorldBean"));
  // }

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const changeMonth = (increment) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + increment);
    setCurrentMonth(newMonth);
  };

  return (
    <div className='dark flex flex-col justify-between  h-screen bg-gray-800 text-white'>
      <header className='flex items-center justify-between px-6 py-4 bg-blue-500'>
        <h1 className='text-1xl font-bold text-white-500'>
          {" "}
          <span>T C R C</span>
          <br />
          <span>참여랭킹</span>
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
                <td class='p-4 align-middle '>John Doe</td>
                <td class='p-4 align-middle '>15</td>
              </tr>
              <tr class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                <td class='p-4 align-middle '>2</td>
                <td class='p-4 align-middle '>Jane Smith</td>
                <td class='p-4 align-middle '>12</td>
              </tr>
              <tr class='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                <td class='p-4 align-middle '>3</td>
                <td class='p-4 align-middle '>Bob Johnson</td>
                <td class='p-4 align-middle '>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// function CalendarDaysIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//       <line x1="16" x2="16" y1="2" y2="6" />
//       <line x1="8" x2="8" y1="2" y2="6" />
//       <line x1="3" x2="21" y1="10" y2="10" />
//       <path d="M8 14h.01" />
//       <path d="M12 14h.01" />
//       <path d="M16 14h.01" />
//       <path d="M8 18h.01" />
//       <path d="M12 18h.01" />
//       <path d="M16 18h.01" />
//     </svg>
//   )
// }
