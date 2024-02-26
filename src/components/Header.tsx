import { useState } from "react";
import { LogoPinterest } from "./icons/LogoPinterest";
import { LinkA } from "./ui/LinkA";
import { Link } from "@tanstack/react-router";
import { Registro } from "./Registro";
import { IniciarSesion } from "./IniciarSesion";

export const Header = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    function handlelogin() {
        setShowLogin(true)
        setShowRegister(false)
    }
    function handleregister() {
        setShowRegister(true)
        setShowLogin(false)
    }

    return (
        <>
            <div>
                <header className="flex justify-between p-5 sticky w-full flex-wrap bg-white z-10">
                    <Link to="/" className="flex items-center">
                        <LogoPinterest />
                        <h1 className="text-1xl text-red-700 font-sans font-semibold">
                            Pinterest
                        </h1>
                    </Link>
                    <nav className="flex gap-4 items-center">
                        <LinkA className="hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950">
                            Info
                        </LinkA>
                        <LinkA className="hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950">
                            Empresas
                        </LinkA>
                        <LinkA className="hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950">
                            Block
                        </LinkA>
                        <button className='text-xs md:text-xl translate font-semibold py-2 px-5 bg-red-600 rounded-3xl text-white'>Iniciar Sesión</button>
                        <button className='text-xs md:text-xl font-semibold py-2 px-5 bg-gray-200 rounded-3xl '>Registrarse</button>
                    </nav>
                    <IniciarSesion envi={handlelogin} style={showLogin === false ? 'hidden' : ' trans fixed bg-white py-10 left-1/2 top-1/2 w-[60vh] sm:w-[70vh]  rounded-3xl border-2 border-black'} />
                    <Registro envi={handleregister} style={showRegister === false ? 'hidden' : ' trans fixed bg-white py-8 left-1/2 top-1/2 w-[60vh] sm:w-[70vh]   rounded-3xl border-2 border-black'} />
                </header>
            </div>
        </>
    )
}