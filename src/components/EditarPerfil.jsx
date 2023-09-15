import React from "react";
import { Header2 } from "./Header2";
import { Buttonperfil } from "./editarperfil/Buttonperfil";
import { useAuth } from "../context/authContext";

export const EditarPerfil = () => {
const { user } = useAuth();
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
            <button className="p-2 h-[90%] text-base font-medium rounded-full bg-slate-200">Modificar</button>
          </article>
          <form>
            
          </form>
        </section>
      </div>
    </>
  );
};
