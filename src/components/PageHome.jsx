import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { BsPinterest } from "react-icons/Bs";
import { FaSearch } from "react-icons/Fa";
import { IoIosNotifications } from "react-icons/Io";
import { AiFillMessage } from "react-icons/Ai";
import { BiUserCircle } from "react-icons/Bi";
import { BiChevronDown } from "react-icons/Bi";

export const PageHome = () => {
  const { user, loading, logout } = useAuth();
  const [back, setBack]= useState(false)

  const handlelogout = () => {
    logout();
  };

  if (loading) return <h2>loading</h2>;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // const apiUrl = "https://api.unsplash.com/search/photos";
    // const autori = "nPhLgCjVpjHfZiSXri4UaUj1u9rxKkxf6mJzS8Ffd7w";

    const renderCharacter = async () => {
      const respuestaDelServidor = await fetch(
        "https://api.unsplash.com/search/photos?query=lapto&client_id=nPhLgCjVpjHfZiSXri4UaUj1u9rxKkxf6mJzS8Ffd7w"
      );
      const conversionJson = await respuestaDelServidor.json();
      setPhotos(conversionJson.results);
    };
    renderCharacter();
  }, []);


  return (
    <>
      <header className="p-1 flex justify-evenly items-center">
        <div className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <BsPinterest className="text-3xl text-red-700" />
        </div>
        <div>
          <button onClick={()=>setBack(!back)} className={back == false ? 'rounded-full text-white px-5 py-2 bg-black': 'rounded-full text-black px-5 py-2 '}>
            Inicio
          </button>
        </div>
        <div>
          <button onClick={()=>setBack(!back)} className={back == true ? 'rounded-full text-white px-5 py-2 bg-black': 'rounded-full text-black px-5 py-2 '}>
            Explorar
          </button>
        </div>
        <div>
          <select className="flex justify-center items-center border-0 w-24">
            <option>Crear</option>
            <option>Crear Idea Pin</option>
            <option>Crear Pin</option>
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
            <BiUserCircle className="text-3xl" />
          </figure>
        </div>
        <div className="flex w-10 h-10 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <figure>
          <BiChevronDown className="text-3xl" />
          </figure>
        </div>
      </header>
      <div>Bienvenido {user.displayName || user.email}</div>
      <div className="w-full h-full flex justify-center">
        <div className="w-10/12 flex flex-wrap columns-5 my-auto h-full max-w-7xl gap-2">
          {photos.map((photo) => (
            <div key={photo.id} className="inline-flex">
              <section className="flex items-center box-content w-56">
                <img
                  src={photo.urls.small}
                  className="w-full flex"
                  alt={photo.description}
                />
              </section>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlelogout}>logout</button>
    </>
  );
};
