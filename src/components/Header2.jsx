import { BsPinterest } from "react-icons/Bs";
import { FaSearch } from "react-icons/Fa";
import { IoIosNotifications } from "react-icons/Io";
import { AiFillMessage } from "react-icons/Ai";
import { BiUserCircle } from "react-icons/Bi";
import { BiChevronDown } from "react-icons/Bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Header2 = () => {
  const {user} = useAuth()
  const [back, setBack] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "option1") {
      navigate("/savepin");
    } else if (selectedOption === "option2") {
      navigate("/savepin");
    }
  };
  const handeclick = () => {
    navigate("/pagehome");
  };
  const handeclickback = () => {
    setBack(!back);
  };
  return (
    <header className="p-1 flex justify-evenly items-center">
      <div className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300">
        <BsPinterest className="text-3xl text-red-700" />
      </div>
      <div onClick={handeclick}>
        <button
          onClick={handeclickback}
          className={
            back == false
              ? "rounded-full text-white px-5 py-2 bg-black"
              : "rounded-full text-black px-5 py-2 "
          }
        >
          Inicio
        </button>
      </div>
      <div>
        <button
          onClick={handeclickback}
          className={
            back == true
              ? "rounded-full text-white px-5 py-2 bg-black"
              : "rounded-full text-black px-5 py-2 "
          }
        >
          Explorar
        </button>
      </div>
      <div>
        <select
          onChange={handleOptionChange}
          className="flex justify-center items-center border-0 w-28"
        >
          <option>Crear</option>
          <option value="option1">Crear Idea Pin</option>
          <option value="option2">Crear Pin</option>
        </select>
      </div>
      <form className="w-2/6 relative">
        <label className="absolute top-1/3 left-1">
          <FaSearch className="text-slate-600" />
        </label>
        <input
          type="text"
          className="rounded-full p-2 pl-7  w-full bg-slate-200 border-0"
          placeholder="Buscar"
        />
      </form>
      <div className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300">
        <figure>
          <IoIosNotifications className="text-3xl text-gray-600" />
        </figure>
      </div>
      <div className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300">
        <figure>
          <AiFillMessage className="text-3xl text-gray-600" />
        </figure>
      </div>
      <div className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300">
        <figure>
          {<img src={user.photoURL } className="rounded-full"/> || <BiUserCircle className="text-3xl" />}
        </figure>
      </div>
      <div className="flex w-10 h-10 justify-center items-center rounded-full p-2 hover:bg-slate-300">
        <figure>
          <BiChevronDown className="text-3xl" />
        </figure>
      </div>
    </header>
  );
};
