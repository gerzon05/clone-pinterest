import React from "react";
import { Header2 } from "./Header2";
import { useAuth } from "../context/authContext";

export const MyPerfil = () => {
  const { user } = useAuth();
  return (
    <>
      <Header2 />
      <div className="mt-16">
        <article className="pt-5">
          <img
            src={
              user.photoURL ||
              "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            }
            className="rounded-full w-24 h-24 object-cover m-auto"
            alt="foto de perfil"
          />
          <h2 className="text-center font-medium text-3xl py-1">
            {user.displayName.charAt(0).toUpperCase() +
              user.displayName.slice(1) || "Usuario"}
          </h2>
          <p className="text-center text-xs py-1">{user.email}</p>
          <div className="flex justify-center gap-3 pt-4">
            <button className="text-lg px-5 py-3 font-semibold rounded-full bg-slate-200">
              Compartir
            </button>
            <button className="text-lg px-5 py-3 font-semibold rounded-full bg-slate-200">
              Editar perfil
            </button>
          </div>
        </article>
        <aside className="fixed w-full mt-16 ">
          <div className="flex justify-center gap-4">
            <button className='hover:bg-slate-300 rounded-xl p-2 text-xl relative font-semibold after:content-[""] after:absolute after:w-full after:-bottom-1 after:h-[3px] focus:after:bg-black after:left-0'>
              Creados
            </button>
            <button className='hover:bg-slate-300 rounded-xl p-2 text-xl relative font-semibold after:content-[""] after:absolute after:w-full after:-bottom-1 after:h-[3px] focus:after:bg-black after:left-0'>
              Editar perfil
            </button>
            <button></button>
          </div>
        </aside>
      </div>
    </>
  );
};
