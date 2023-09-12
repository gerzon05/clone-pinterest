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
        <div
          key={index}
          className="group py-2 cursor-zoom-in relative overflow-hidden"
        >
          <img src={imagenes.imgURL} className="w-full aspect-auto object-cover rounded-xl" />
          <span className="absolute flex flex-col justify-end my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto ">
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
      )):
      <div className="absolute py-2 left-1/2 top-[95%] translate-[-50%,-50%]"><AiOutlineLoading className="text-3xl font-bold animate-spin"/></div>
      }
    </>
  );
};
