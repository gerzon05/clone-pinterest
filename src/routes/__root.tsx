import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { BsPinterest } from 'react-icons/bs'
import { LinkA } from '../components/ui/LinkA'

export const Route = createRootRoute({
    component: () => (
        <>
            <div>
                <header className="flex justify-between p-5 sticky w-full flex-wrap bg-white z-10">
                    <Link to="/" className="flex items-center">
                        <BsPinterest className='text-4xl text-red-700' />
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
                    {/* <IniciarSesion envi={handleClick} style={wachtsesion === false ? 'hidden' : ' trans fixed bg-white py-10 left-1/2 top-1/2 w-[60vh] sm:w-[70vh]  rounded-3xl border-2 border-black'} />
                    <Registro envi={handleClick2} style={wachtRegister === false ? 'hidden' : ' trans fixed bg-white py-8 left-1/2 top-1/2 w-[60vh] sm:w-[70vh]   rounded-3xl border-2 border-black'} /> */}
                </header>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})