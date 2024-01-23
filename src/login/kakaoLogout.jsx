import { supabase } from "./supabaseClient"; // import your initialized supabase client

export default function kakaoLogout() {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Error logging out:', error);
        } else {
          // Handle successful logout
        }
      };

  return (
    <div className='bg-gray-800 p-3 flex-4'>
      <div className='rounded-lg overflow-hidden bg-gray-700 p-4 mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2'>
        <div className='flex items-center justify-between'>
          <button
            onClick={() => handleLogout()}
            className='text-white text-1xl focus:outline-none'>
          </button>
        </div>
      </div>
    </div>
  );
}
