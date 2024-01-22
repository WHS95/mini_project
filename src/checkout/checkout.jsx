import React, { useState, useEffect } from "react";
import BackButton from "../common/backButton";
import supabase from "../config/supabaseClient";

export default function Checkout() {
  const [username, setUsername] = useState("");
  const [participationDate, setParticipationDate] = useState("");
  const [activation, setActivation] = useState("1");
  const [location, setLocation] = useState("1");
  const [isFounder, setIsFounder] = useState(false);
  const [founderButtonText, setFounderButtonText] = useState("모임개설자X");
  const [userAge, setUserAge] = useState(90);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setParticipationDate(currentDate);
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleParticipationDate = (e) => {
    setParticipationDate(e.target.value);
  };

  const handleActivation = (e) => {
    setActivation(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };


  const handleIsFounder = () => {
    setIsFounder(!isFounder);
    setFounderButtonText(isFounder ? "모임개설자X" : "모임개설자O");
  };

  const handleSubmit = async () => {
    try {
      // Insert data into the "meeting" table
      const { data, error } = await supabase.from("meeting").insert([
        {
          name: username,
          meeting_date: participationDate,
          activation,
          age:userAge,
          location,
          founder: isFounder,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        // Reset the form or perform any other necessary actions
      }
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };

  return (
    <div className='dark flex flex-col justify-between  h-screen bg-gray-800 text-black'>
      <header className='flex items-center justify-between px-6 py-4 bg-green-600 text-white'>
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
              className='form-input px-4 py-2 border rounded-md'
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
              나이
            </label>
            <input
              className='form-input px-4 py-2 border rounded-md'
              type='number'
              name='userAge'
              value={userAge}
              onChange={handleUserAge}
              placeholder='94'
            />
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='mb-2 font-bold text-left  text-white'
              htmlFor='date'
            >
              참여일
            </label>
            <input
              className='form-input px-4 py-2 border rounded-md'
              id='date'
              type='date'
              value={participationDate}
              onChange={handleParticipationDate}
            />
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='mb-2 font-bold text-left  text-white'
              htmlFor='type'
            >
              운동종류
            </label>
            <select
              className='form-input px-4 py-2 border rounded-md'
              onChange={handleActivation}
              value={activation}
            >
              <option value='1'>러닝</option>
              <option value='2'>등산</option>
              <option value='3'>자전거</option>
              <option value='4'>기타</option>
            </select>
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='mb-2 font-bold text-left  text-white'
              htmlFor='location'
            >
              장소
            </label>
            <select
              onChange={handleLocation}
              value={location}
              className='form-input px-4 py-2 border rounded-md'
            >
              <option value='1'>태평_탄천</option>
              <option value='2'>서현_황새울공원</option>
              <option value='3'>야탑_탄천종합운동장</option>
              <option value='4'>모란_성남종합운동장</option>
              <option value='5'>위례</option>
              <option value='6'>정자</option>
              <option value='7'>판교</option>
              <option value='8'>그 외</option>
            </select>
          </div>

          <div className='flex flex-col p-1'>
            <label
              className='mb-2 font-bold text-left  text-white'
              htmlFor='isFounder'
            >
              개설자여부
            </label>
            <button
              onClick={handleIsFounder}
              class='text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              {founderButtonText}
            </button>
          </div>

          <div className='flex flex-col p-1'>
            <label></label>
            <button
              onClick={handleSubmit}
              class='text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg py-2'
            >
              출석체크 완료
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
