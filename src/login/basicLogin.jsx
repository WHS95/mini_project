import React, { useState } from "react";
import BackButton from "../common/backButton";
// import CustomModal from "../common/CustomModal";
import supabase from "../config/supabaseClient";

export default function BasicLogin() {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  // const [modalIsOpeconst odalIsOpen] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  async function signUpUser() {
    console.log("tset");
    const email = "tjdngur22@gmail.com";
    const password = "123123123";

    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: 'John',
          age: 27,
        },
        emailRedirectTo: 'https://tcrc-club.vercel.app/'
      }
    });

//     async function signUpNewUser() {
//   const { data, error } = await supabase.auth.signUp({
//     email: 'example@email.com',
//     password: 'example-password',
//     options: {
//       emailRedirectTo: 'https://example.com/welcome'
//     }
//   })
// }


    if (error) {
      console.error("Sign Up Error:", error);
      return;
    }

    if (user) {
      console.log("user: ", user);
    }
  }

  async function test() {
    const { data: { user } } = await supabase.auth.getUser()
    console.log('{ user }: ', { user });
    console.log('{ user }: ', user );
  }


  // //회원 여부 체크
  // const fetchUser = async () => {
  //   const { data } = await supabase
  //     .from("users")
  //     .select("*", { count: "exact" })
  //     .eq("name", username)
  //     .eq("age", userAge);

  //   if (data && data.length > 0) {
  //     setIsUser(true);
  //   } else {
  //     setIsUser(false);
  //     setModalIsOpen(true); // Open modal if no user is found
  //     setErrorMessage("이름과 년생을 확인해주세요");
  //   }
  // };

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleEmail = (e) => {
    const email = e.target.value;
    console.log("email: ", email);
    if (email.match(emailRegEx) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      setEmailError("이메일 형식을 확인해주세요");
      setEmail(e.target.value);
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    if (password.match(passwordRegEx) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      setPasswordError(
        "비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요"
      );
      setPassword(e.target.value);
    }
  };

  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  return (
    <div className='dark flex flex-col justify-between  h-screen bg-gray-800 text-black'>
      <header className='flex items-center justify-between px-6 py-4 bg-green-500 text-white'>
        <h1 className='text-1xl font-bold text-white-900'>
          {" "}
          <span>T C R C</span>
          <br />
          <span>출석체크</span>
        </h1>
        <BackButton />
      </header>
      <main className='flex-1 overflow-y-auto p-3 bg-gray-800'>
        <div className='rounded-lg overflow-hidden bg-gray-700 p-4 pt-1 mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2'>
          <div className='flex flex-col p-1'>
            <label
              className='font-bold mb-2 text-left text-white'
              htmlFor='name'
            >
              이름
            </label>
            <input
              className='form-input py-2 px-3 focus:outline-none  border rounded-md'
              type='text'
              name='username'
              value={username}
              onChange={handleUsernameChange}
              placeholder='홍길동'
            />
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='font-bold mb-2 text-left text-white'
              htmlFor='name'
            >
              년생
            </label>
            <input
              className='form-input py-2 px-3 focus:outline-none  border rounded-md'
              type='number'
              name='userAge'
              value={userAge}
              onChange={handleUserAge}
              placeholder='94'
            />
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='font-bold mb-2 text-left text-white'
              htmlFor='email'
            >
              이메일
            </label>
            <input
              className='form-input py-2 px-3 focus:outline-none  border rounded-md'
              type='text'
              name='email'
              value={email}
              onChange={handleEmail}
              placeholder='abc@gmail.com'
            />
            {emailError ? <p>{emailError}</p> : null}
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='font-bold mb-2 text-left text-white'
              htmlFor='name'
            >
              비밀번호
            </label>
            <input
              className='form-input py-2 px-3 focus:outline-none  border rounded-md'
              type='text'
              name='password'
              value={password}
              onChange={handlePassword}
            />
            {passwordError ? <p>{passwordError}</p> : null}
          </div>

          <div className='flex flex-col p-1'>
            <label></label>
            <button
              onClick={() => signUpUser()}
              class='text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              회원가입
            </button>
          </div>
          {/* 
          <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            errorMessage={errorMessage}
          /> */}
        </div>

        {/* <input 
              _onChange={(e)=>{setUsername(e.target.value); 
                              emailCheck(e.target.value)}} 
              placeholder="이메일(아이디)" name="signup_id" type="email"></input>
              <input 
              _onChange={(e)=>{setPassword(e.target.value); 
                              passwordCheck(e.target.value)}} 
              placeholder="비밀번호" type="password" name="signup_pwd"></input>
              <input 
              _onChange={(e)=>{setPasswordChk(e.target.value); 
                              passwordDoubleCheck(password, e.target.value)}} 
              placeholder="비밀번호 확인" type="password" name="signup_pwd_check"></input>
              <input >비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</input> */}
      </main>
    </div>
  );
}
