import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Header2 } from "./Header2";
import { Pin } from "./Pin";



export const PageHome = () => {
  const { loading } = useAuth();

  if (loading) return <h2>loading</h2>;

  const [estabus,setEstaBus] = useState("")
  const [guardarimg,setGuardarImg] = useState([])

  const saveimg = (img)=>{
    setGuardarImg([...guardarimg, img])
  }
  
  return (
    <>
      <Header2 buscador={setEstaBus}/>
      <div className="w-full mt-16 flex justify-center items-center">
        <div className="container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4">
          <Pin buscador={estabus} saveimg={saveimg}/>
        </div>
      </div>
    </>
  );
};
