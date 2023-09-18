import React from "react";
import { Header2 } from "./Header2";
import { Buttonperfil } from "./editarperfil/Buttonperfil";
import { useAuth } from "../context/authContext";

export const EditarPerfil = (props) => {
  const { user } = useAuth();
  const text = user.displayName;
  const email = user.email;
  return (
    <>
      <Header2 />
      <div className="mt-16 flex">
        <section className="py-14 px-5 flex flex-col w-1/4 gap-2">
          <Buttonperfil value="Editar Perfil" />
          <Buttonperfil value="Gestión de la cuenta" />
          <Buttonperfil value="Visivilidad del perfil" />
          <Buttonperfil value="Optimiza tu feed de inicio" />
          <Buttonperfil value="Cuentas conetadas" />
          <Buttonperfil value="Permisos sociales" />
          <Buttonperfil value="Notificaciones" />
          <Buttonperfil value="Privacidad y datos" />
          <Buttonperfil value="Seguridad" />
          <Buttonperfil value="Contenido de la marca" />
        </section>
        <section className="p-14">
          <h2 className="text-3xl font-semibold">Editar Perfil</h2>
          <p className="w-[295px] sm:w-[488px] mt-3">
            Mantén la privacidad de tus datos personales. Cualquier usuario que
            pueda ver tu perfil puede ver la información que añades aquí.
          </p>
          <article className="mt-4 py-7 flex gap-7 items-center relative after:content-['foto'] after:absolute after:top-0 after:left-0">
            <img
              src={
                user.photoURL ||
                "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              }
              className="w-14 h-14 rounded-full object-cover"
            />
            <button className="p-2 h-[90%] text-base font-medium rounded-full bg-slate-200">
              Modificar
            </button>
          </article>
          <form className="mb-[100px]">
            <div className="flex gap-3 flex-wrap">
              <section className="flex flex-col gap-2">
                <label className="text-xs">Nombre</label>
                <input
                  type="text"
                  className="border-2 rounded-2xl border-gray-400"
                  value={props.nombre || text.split(" ")[0]}
                />
              </section>
              <section className="flex flex-col gap-2">
                <label className="text-xs">Nombre</label>
                <input
                  type="text"
                  className="border-2 rounded-2xl border-gray-400"
                  value={props.nombre || text.split(" ")[1]}
                />
              </section>
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <label className="text-xs">info</label>
              <textarea
                className="border-2 rounded-2xl h-24 border-gray-400 resize-none"
                placeholder="cuenta tu historia"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <label className="text-xs">sitio web</label>
              <input
                type="url"
                className="border-2 rounded-2xl border-gray-400 resize-none"
                placeholder="Añade un enlace para impulser en tráfico a tu sitio"
              />
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <label className="text-xs">nombre de usuario</label>
              <input
                type="text"
                className="border-2 rounded-2xl border-gray-400 resize-none"
                value={email.split("@")[0]}
              />
              <div className="text-xs">www.pinterest.com/{email.split("@")[0]}</div>
            </div>
          </form>
        </section>
      </div>
      <div className="fixed flex justify-center items-center gap-3 bottom-0 w-full p-5 bg-white">
        <button className="bg-slate-200 rounded-full border-0 font-semibold px-3 py-2 text-lg">Restablecer</button>
        <button className="bg-red-700 text-white rounded-full border-0 font-semibold px-3 py-2 text-lg">Guardar</button>
      </div>
    </>
  );
};
