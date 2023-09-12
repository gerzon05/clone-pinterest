import { Header2 } from "../Header2";
import { Pin2 } from "./Pin2";
import { InicioExplo } from "./InicioExplo";
import { FiArrowLeft } from "react-icons/Fi";
import { useNavigate } from "react-router-dom";

export const Dulces = () => {
  const navigatate = useNavigate();
  return (
    <>
      <Header2 />
      <div className="mt-20 flex flex-col items-center justify-center relative">
      <div
        onClick={() => navigatate("/explorar")}
        className="absolute w-12 h-12 flex justify-center bg-white items-center rounded-full hover:bg-slate-300 left-3 top-3"
      >
        <FiArrowLeft className="text-3xl font-bold" />
      </div>
        <InicioExplo
          src="https://i.pinimg.com/736x/55/73/94/557394fd3c32b79870aad69037c58908.jpg"
          parragraf="Dulces o Saladas"
          title="Recetas con manzanas"
        />
        <p className="w-[290px] sm:w-[600px] ms:w-[800px] py-3">
          La manzana es el ingrediente perfecto para hacer tortas o hasta servir
          de aderezo en las ensaladas. Guarda tu receta preferida para darles
          una oportunidad en tu menú semanal.
        </p>
      </div>
      <div className="w-full mt-16 flex justify-center items-center">
        <div className="container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4">
          <Pin2 filter="dulces" />
        </div>
      </div>
    </>
  );
};
