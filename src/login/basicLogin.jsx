import React, { useState } from "react";
import BackButton from "../common/backButton";
import supabase from "../config/supabaseClient";
import CustomModal from "../common/CustomModal";

export default function BasicLogin() {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);



  async function signUpUser() {
    // 사용자 가입 처리
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: username,
          age: userAge,
        },
      },
    });

    // 에러 처리
    if (error) {
      setModalIsOpen(true); // 모달 열기
      setErrorMessage("회원가입 에러 발생, 운영진에게 문의하세요."); // 에러 메시지 설정
      return; // 함수 종료
    }

    return data;
  }

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (email.match(emailRegEx) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      setEmailError("이메일 형식을 확인해주세요");
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    // if (password.match(passwordRegEx) === null) {
    //   //형식에 맞지 않을 경우 아래 콘솔 출력
    //   setPasswordError(
    //     "비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요"
    //   );
    // }
  };

  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async () => {

    const data = await signUpUser();


    // 가입 성공 시, 사용자 정보를 'users_test' 테이블에 저장
    if (data) {

      const userData = data.user;
      const user_id = userData.id;
      const user_metadata = userData.user_metadata;
      const username = user_metadata.name;
      const userAge = user_metadata.age;
      const created_at = userData.created_at;
      const updated_at = userData.updated_at;

      // console.log("user_id: ", user_id);
      // console.log("username: ", username);
      // console.log("userAge: ", userAge);
      // console.log("created_at: ", created_at);
      // console.log("updated_at: ", updated_at);

      const { data: insertData, error: insertError } = await supabase
        .from("users_test")
        .insert([
          {
            user_id: user_id, // Supabase에서 생성된 사용자 ID
            name: username,
            age: userAge,
            created_at: created_at, // 현재 시간을 ISO 문자열로
            updated_at: updated_at, // 현재 시간을 ISO 문자열로
            activation:"FALSE"
          },
        ]);

      // 추가 정보 저장 시 에러 처리
      if (insertError) {
        setModalIsOpen(true); // 모달 열기
        setErrorMessage("회원 정보 저장 중 에러 발생, 운영진에게 문의하세요."); // 에러 메시지 설정
      } else if (insertData) {
        setModalIsOpen(true); // 모달 열기
        setErrorMessage("가입 완료, 이메일을 확인하세요."); // 성공 메시지 설정
      }
    }
  };

  return (
    <div className='dark flex flex-col justify-between  h-screen bg-gray-800 text-black'>
      <header className='flex items-center justify-between px-6 py-4 bg-green-500 text-white'>
        <h1 className='text-1xl font-bold text-white-900'>
          {" "}
          <span>T C R C</span>
          <br />
          <span>회 원 가 입</span>
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
              onClick={handleSubmit}
              class='text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              회원가입
            </button>
          </div>
          <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            errorMessage={errorMessage}
          />
        </div>
      </main>
    </div>
  );
}
