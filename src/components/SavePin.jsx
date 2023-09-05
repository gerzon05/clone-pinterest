import React from "react";
import { Header2 } from "./Header2";
import { useAuth } from "../context/authContext";

export const SavePin = () => {
  const { user } = useAuth();
  return (
    <>
      <Header2 />
      <main className="bg-slate-300 p-12 flex justify-center">
        <div className="bg-white rounded-2xl max-w-4xl p-8">
          <section>
            <form>
              <div className="flex justify-end">
                <button className="rounded-lg bg-red-700 px-6 py-3 text-xl text-white">
                  Guardar
                </button>
              </div>
              <div className="flex justify-center items-center">
                <section className="w-96 flex justify-center items-center flex-col gap-2">
                  <div className="w-full h-96 rounded-3xl bg-slate-400 flex justify-center items-center ">
                    <input type="file" className="rounded-3xl text-sm" />
                  </div>
                  <button className="w-full rounded-3xl py-2 bg-slate-400">
                    Guardar desde el sitio
                  </button>
                </section>
                <section className="w-11/12 p-2 flex flex-col gap-9">
                  <div>
                    <input
                      type="text"
                      className="w-full border-0 text-4xl"
                      placeholder="Añade un titulo"
                    />
                    <hr className="bg-black h-px" />
                  </div>
                  <figure className="flex items-center gap-3">
                    <img src={user.photoURL} className="w-8 h-8 rounded-full" />
                    <span>
                      <h2>{user.displayName || user.email}</h2>
                    </span>
                  </figure>
                  <figure>
                    <input
                      type="text"
                      className="w-full border-0 text-1xl"
                      placeholder="Indica en que consiste tu pin"
                    />
                    <hr className="bg-black h-px" />
                  </figure>
                  <figure>
                    <input
                      type="text"
                      className="w-full border-0 text-1xl"
                      placeholder="Añade un enlace de destino"
                    />
                    <hr className="bg-black h-px" />
                  </figure>
                  <figure>
                    <input
                      type="text"
                      className="w-full border-0 text-1xl"
                      placeholder="añade la categoria de tu pin"
                    />
                    <hr className="bg-black h-px" />
                  </figure>
                </section>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};
