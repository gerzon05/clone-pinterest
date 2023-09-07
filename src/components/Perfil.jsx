import React from "react";
import { useAuth } from "../context/authContext";
import { BsCheck } from "react-icons/Bs";
import { GrShare } from "react-icons/Gr";

export const Perfil = (props) => {
  const { logout, user } = useAuth();
  const handlelogout = () => {
    logout();
  };

  return (
    <div
      className={
        props.valor === true
          ? "fixed w-80 top-16 m-1 right-0 bottom-0 bg-white rounded-3xl p-5 overflow-y-auto"
          : "hidden"
      }
    >
      <section>
        <figure>
          <article className="relative pt-4">
            <p className="absolute text-xs top-0 left-0">Actualmente en</p>
            <BsCheck className="absolute right-4 top-10 text-lg" />
            <div className="rounded-2xl flex justify-center items-center p-2 gap-2 hover:bg-slate-300 ">
              <div>
                <img
                  src={user.photoURL || "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"}
                  className="rounded-full w-12 h-12 object-cover"
                  alt="foto de perfil"
                />
              </div>
              <div>
                <h2 className="text-sm">{user.displayName || "usuario"}</h2>
                <p className="text-sm">personal</p>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          </article>
          <article>
            <p className="text-xs">Tus cuentas</p>
            <div>
              <button className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">Añadir cuenta</button>
              <button className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">Convertir cuenta para empresa</button>
            </div>
          </article>
          <article>
            <p className="text-xs">Mas opciones</p>
            <div>
              <button className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Ajustes
              </button>
              <button className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Optimiza tu feed de inicio
              </button>
              <button className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Instala la aplicacion de windows
              </button>
              <button className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Tus derechos de privacidad
              </button>
              <button className="flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                obtener ayuda
                <GrShare className="font-black text-xs" />
              </button>
              <button className="flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Ver terminos de servicios
                <GrShare className="font-black text-xs" />
              </button>
              <button className="flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Ver pilotica de privacidad
                <GrShare className="font-black text-xs" />
              </button>
              <button className="flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full">
                Valora la version beta
                <GrShare className="font-black text-xs" />
              </button>
              <button
                className="text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full"
                onClick={handlelogout}
              >
                Cerrar sesión
              </button>
            </div>
          </article>
        </figure>
      </section>
    </div>
  );
};
