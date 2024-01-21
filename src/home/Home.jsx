import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const gotoParticipation = () => {
    navigate(`/user/participation`);
  };

  const gotoFounder = () => {
    navigate(`/user/founder`);
  };

  const gotoCheckOut = () => {
    navigate(`/user/checkout`);
  };

  return (
    <div
      key='1'
      className='dark flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4'
    >
      <header className='w-full max-w-xs flex justify-between items-center mb-4'>
        <div className='text-3xl font-bold'>TCRC 러닝크루</div>
        <div className='flex space-x-2'>
          <button className='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200'>
            <BellIcon className='' />
          </button>
          <button className='bg-green-600 text-white rounded-full p-2 hover:bg-green-600 transition-colors duration-200'>
            <UserIcon className='' />
          </button>
        </div>
      </header>
      <main className='flex flex-col space-y-4 shadow-lg w-full max-w-xs'>
        <button
          className='font-bold p-4 bg-blue-500 text-white text-center rounded-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200 shadow-lg'
          onClick={() =>gotoParticipation()}
        >
          참여랭킹
        </button>
        <button
          className='font-bold p-4 bg-blue-500 text-white text-center rounded-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200 shadow-lg'
          onClick={() =>gotoFounder()}
        >
          개설랭킹
        </button>
        <button
          className='font-bold p-4 bg-green-500 text-white text-center rounded-md hover:bg-green-700 transform hover:scale-105 transition-transform duration-200 shadow-lg'
          onClick={() =>gotoCheckOut()}
        >
          출석체크 
        </button>
      </main>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
      <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
