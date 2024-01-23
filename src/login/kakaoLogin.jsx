import { supabase } from "./supabaseClient"; // import your initialized supabase client

export default function kakaoLogin() {
  const handleLogin = async () => {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "kakao",
      },
      {
        redirectTo: "http://localhost:3000/login?loginState=kakao",
      }
    );

    if (user) {
      console.log("User's unique ID in Supabase:", user.id);
      console.log("User's email:", user.email);
      console.log("User:", user);
    }

    if (error) {
      console.error("Error logging in:", error);
    } else {
      // Handle successful login
    }
  };

  return (
    <button
      className='font-bold p-4 bg-yellow-400 text-white text-center rounded-md hover:bg-yellow-500 transform hover:scale-105 transition-transform duration-200 shadow-lg'
      onClick={handleLogin()}
    >
      kakao
    </button>
  );
}
