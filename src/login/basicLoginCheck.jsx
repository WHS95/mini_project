import React, { useState } from "react";
import BackButton from "../common/backButton";
import supabase from "../config/supabaseClient";

export default function BasicLoginCheck() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  async function LoginCheck() {
    console.log("=======signUpUser=====");

    let { data, error } = await supabase.auth.signInWithPassword({
      email: "tjdngur23@gmail.com",
      password: "VKnzuJhuVQgrhLouhPNY",
    })
    
    console.log("data: ", data);
    console.log("error: ", error);
  }

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
          <span>로그인</span>
        </h1>
        <BackButton />
      </header>
      <main className='flex-1 overflow-y-auto p-3 bg-gray-800'>
        <div className='rounded-lg overflow-hidden bg-gray-700 p-4 pt-1 mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2'>
        
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
            {emailError ? <p className='text-white'>{emailError}</p> : null}
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
            {passwordError ? (
              <p className='text-white'>{passwordError}</p>
            ) : null}
          </div>

          <div className='flex flex-col p-1'>
            <label></label>
            <button
              onClick={LoginCheck}
              class='text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              로그인
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
