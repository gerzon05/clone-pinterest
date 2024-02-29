// import React from "react";
// import { useState } from "react";
// import { IniciarSesion } from "./IniciarSesion";
// import { Registro } from "./Registro";
// import {BsPinterest} from 'react-icons/Bs'

// export const Header = () => {
//   const [wachtsesion, setWachtSesion] = useState(false)
//   const [wachtRegister, setWachtRegister] = useState(false)
//   const handleClick = () =>{
//     setWachtSesion(!wachtsesion)
//   }
//   const handleClick2 = () =>{
//     setWachtRegister(!wachtRegister)
//   }
//   return (
//     <header className="flex justify-between p-5 fixed w-full flex-wrap bg-white z-10">
//       <section className="flex items-center">
//         <BsPinterest className='text-4xl text-red-700'/>
//         <h1 className="text-1xl text-red-700 font-sans font-semibold">
//           Pinterest
//         </h1>
//       </section>
//       <nav className="flex gap-4 items-center">
//         <a className="hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950">
//           Info
//         </a>
//         <a className="hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950">
//           Empresas
//         </a>
//         <a className="hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950">
//           Block
//         </a>
//         <button onClick={handleClick} className='text-xs md:text-xl translate font-semibold py-2 px-5 bg-red-600 rounded-3xl text-white'>Iniciar Sesión</button>
//         <button onClick={handleClick2} className='text-xs md:text-xl font-semibold py-2 px-5 bg-gray-200 rounded-3xl '>Registrarse</button>
//         {/* <Button
//           click={handleClick}
//           placeholder="Iniciar Sesión"
//           style="font-semibold py-2 px-5 bg-red-600 rounded-3xl text-white"
//         /> */}
//         {/* <Button
//           placeholder="Registrarse"
//           style="font-semibold py-2 px-5 bg-gray-200 rounded-3xl"
//         /> */}
//       </nav>
//       <IniciarSesion envi={handleClick} style={wachtsesion === false ? 'hidden':' trans fixed bg-white py-10 left-1/2 top-1/2 w-[60vh] sm:w-[70vh]  rounded-3xl border-2 border-black'} />
//       <Registro envi={handleClick2} style={wachtRegister === false ? 'hidden':' trans fixed bg-white py-8 left-1/2 top-1/2 w-[60vh] sm:w-[70vh]   rounded-3xl border-2 border-black'} />
//     </header>
//   );
// };
