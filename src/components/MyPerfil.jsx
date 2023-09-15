import React, { useState } from "react";
import { Header2 } from "./Header2";
import { useAuth } from "../context/authContext";
import { Saveimg } from "./saveimg";
import { useNavigate } from "react-router-dom";

export const MyPerfil = () => {
  const navigate = useNavigate();
  const { user, saveimage } = useAuth();
  const [saveima, setSaveIma] = useState(null);

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
            <button
              onClick={() => navigate("/perfil/editarperfil")}
              className="text-lg px-5 py-3 font-semibold rounded-full bg-slate-200"
            >
              Editar perfil
            </button>
          </div>
        </article>
        <aside className="w-full mt-5 ">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSaveIma(false)}
              className='hover:bg-slate-300 rounded-xl p-2 text-xl relative font-semibold after:content-[""] after:absolute after:w-full after:-bottom-1 after:h-[3px] focus:after:bg-black after:left-0'
            >
              Creados
            </button>
            <button
              onClick={() => setSaveIma(true)}
              className='hover:bg-slate-300 rounded-xl p-2 text-xl relative font-semibold after:content-[""] after:absolute after:w-full after:-bottom-1 after:h-[3px] focus:after:bg-black after:left-0'
            >
              Guardados
            </button>
          </div>
        </aside>
        <div>
          {saveima ? (
            <div className="container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4">
              <Saveimg saveimage={saveimage} />
            </div>
          ) : (
            <div className="p-14 text-center">
              <p className="text-center py-2">
                Aún no hay nada para mostrar. Los Pines que crees se almacenarán
                aquí.
              </p>
              <button className="w-36 px-4 py-2 rounded-full bg-red-700 text-base text-white">
                Crear Idea Pin
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
