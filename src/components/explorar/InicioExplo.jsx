import React from "react";

export const InicioExplo = ({src,parragraf,title}) => {
  return (
    <>
        <article
          className="cursor-pointer relative w-[290px] h-[250px] sm:w-[600px] sm:h-[350px] ms:w-[800px] md:h-[400px] rounded-3xl overflow-hidden mb-6"
        >
          <img src={src} className="w-full object-cover object-[0,-200px]" />
          <figure className="absolute  flex flex-col p-8 justify-end items-center top-0 bottom-0 w-full bg-black/40">
            <p className="text-center text-white text-base">{parragraf}</p>
            <h3 className="text-center text-white text-3xl">{title}</h3>
            <button className="mt-2 px-8 text-2xl py-2 bg-slate-300 rounded-full">Compartir</button>
          </figure>
        </article>
    </>
  );
};
