
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Manage() {
  return (
    <div key="1" className="dark flex flex-col h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between px-6 py-4 bg-gray-800">
        <h1 className="text-2xl font-bold text-green-500">TCRC RUNNING</h1>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link className="text-lg" href="#">
                <Button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors duration-200">
                  <div />
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-6 bg-gray-800">
        <div className="rounded-lg overflow-hidden bg-gray-700 p-4 mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="flex justify-between items-center mb-4 text-green-500">
            <h2 className="text-xl font-bold">참여왕</h2>
            <div className="flex items-center space-x-2">
              <label className="text-lg" htmlFor="month">
                월:
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-[300px] justify-start text-left font-normal text-green-100" variant="outline">
                    <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                    Select Month
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar initialFocus mode="month" numberOfMonths={1} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Participation Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
