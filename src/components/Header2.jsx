import { BsPinterest } from "react-icons/Bs";
import { FaSearch } from "react-icons/Fa";
import { IoIosNotifications } from "react-icons/Io";
import { AiFillMessage } from "react-icons/Ai";
import { BiChevronDown } from "react-icons/Bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Perfil } from "./Perfil";

export const Header2 = ({ como }) => {
  const { user } = useAuth();
  console.log(user);
  const [back, setBack] = useState(false);
  const [perfil, setPerfil] = useState(false);
  const navigate = useNavigate();
  const handlePerfil = () => {
    setPerfil(!perfil);
  };
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "option1") {
      navigate("/savepin");
    } else if (selectedOption === "option2") {
      navigate("/savepin");
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    como(event.target.value);
  };
  const handeclick = () => {
    navigate("/pagehome");
  };
  const handeclickperfil = () => {
    navigate("/mi-perfil");
  };
  const handeclickback = () => {
    setBack(!back);
  };
  return (
    <>
      <header className="p-1 flex justify-evenly items-center fixed z-30 top-0 w-full bg-white">
        <div onClick={handeclick} className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <BsPinterest className="text-3xl text-red-700" />
        </div>
        <div onClick={handeclick}>
          <button
            onClick={handeclickback}
            className={
              back == false
                ? "rounded-full text-white px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg bg-black"
                : "rounded-full text-black px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg "
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
                ? "rounded-full text-white px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg bg-black"
                : "rounded-full text-black px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg "
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
            onChange={handleChange}
            type="text"
            className="rounded-full p-2 pl-7  w-full bg-slate-200 border-0"
            placeholder="Buscar"
          />
        </form>
        <div className="flex sm:w-10 md:w-10 sm:h-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 w-9 h-9 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <figure>
            <IoIosNotifications className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lg text-gray-600" />
          </figure>
        </div>
        <div className="flex sm:w-10 md:w-10 sm:h-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 w-9 h-9 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <figure>
            <AiFillMessage className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lg text-gray-600" />
          </figure>
        </div>
        <div className="flex sm:w-10 md:w-10 sm:h-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 w-9 h-9 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <figure onClick={handeclickperfil}>
            <img
              src={
                user.photoURL ||
                "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              }
              className="rounded-full object-cover"
              alt="foto de perfil"
            />
          </figure>
        </div>
        <div className="flex w-10 h-10 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <button
            onClick={handlePerfil}
            className="border-0 border-white rounded-full bg-white"
          >
            <BiChevronDown className="text-3xl" />
          </button>
        </div>
        <Perfil handeclick={handeclickperfil} valor={perfil} />
      </header>
    </>
  );
};
