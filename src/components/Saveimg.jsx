import React, { useState, useEffect } from "react";
import { AiOutlineEllipsis, AiOutlineLoading } from "react-icons/Ai";
import { FiShare } from "react-icons/Fi";
import { useAuth } from "../context/authContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase/firebase";
const db = getFirestore(app);
export const Saveimg = () => {
  const {user} = useAuth()
  const [mostrarimg,setMostrarImg] = useState([])
  const [popap, setPopap] = useState("", false);
  useEffect(() => {
    const getimg = async () => {
      try {
        const basedatos = await getDocs(collection(db, user.email));
        const docs = [];
        basedatos.forEach((img) => {
          docs.push({ ...img.data(), id: img.id });
        });
        setMostrarImg(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getimg();
  }, []);
  return (
    <>
      {mostrarimg.length > 0 ? mostrarimg.map((imagenes, index) => (
        <div key={index}>
            {popap && (
                <div
                  onClick={() => setPopap("", false)}
                  className="z-20 fixed flex justify-center items-center w-full left-0 top-16 bottom-0 bg-transparent backdrop-blur-[1px]"
                >
                  <div>
                    <img
                      src={popap}
                      className="cursor-zoom-out w-[260] sm:w.[500px] md:w-[650px] lg:w-[700px] h-[80vh] aspect-auto object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}
              <div className="group py-2 cursor-zoom-in relative overflow-hidden">
                <img
                  src={imagenes.imgURL}
                  className="w-full aspect-auto object-cover rounded-xl"
                  alt={imagenes.titulo}
                />
                <span
                  onClick={() => setPopap(imagenes.imgURL, true)}
                  className="absolute flex flex-col justify-between my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto "
                >
                  <article className="flex gap-2 justify-end p-3 opacity-0 group-hover:opacity-100">
              <div className="cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center">
                <FiShare className=" text-1xl" />
              </div>
              <div className="cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center">
                <AiOutlineEllipsis className=" text-3xl" />
              </div>
            </article>
                </span>
              </div>
            </div>
      )):
      <div className="absolute py-2 left-1/2 top-[95%] translate-[-50%,-50%] text-center"><AiOutlineLoading className="text-3xl font-bold animate-spin"/></div>
      }
    </>
  );
};
