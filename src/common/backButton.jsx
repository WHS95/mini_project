import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용

    const onClickBtn = () => {
        navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
      };
    

  return (
    <button
    onClick={() => onClickBtn()}
    className='text-white text-1xl focus:outline-none'
    >
    <BiArrowBack className='icon' size={40} />
    </button>
  );
};

export default BackButton;
