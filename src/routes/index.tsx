import { createFileRoute } from '@tanstack/react-router';
import React from 'react'
import { DefaultCarousel } from '../components/Carrusel';
import { Button } from '../components/ui/Button'
import { Img } from '../components/ui/Img';
import { Registro } from '../components/Registro';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <DefaultCarousel />
            <section className="flex justify-center items-center flex-wrap bg-yellow-200">
                <div className="flex justify-center items-center flex-wrap">
                    <article className="max-w-md flex justify-evenly flex-wrap py-12 gap-2">
                        <Img
                            src="https://s.pinimg.com/webapp/center-77497603.png"
                            className=" w-48 object-cover"
                        />
                        <Img
                            src="https://s.pinimg.com/webapp/topRight-d0230035.png "
                            className=" w-48 object-cover"
                        />
                        <Img
                            src="https://s.pinimg.com/webapp/left-511a9304.png"
                            className=" w-48 object-cover"
                        />
                        <Img
                            src="https://s.pinimg.com/webapp/right-88044782.png"
                            className=" w-48 object-cover"
                        />
                    </article>
                    <article className="w-2/4 px-4 py-16 flex flex-col gap-4">
                        <h2 className="text-6xl font-bold text-center">Busca una idea</h2>
                        <p className="text-2xl w-3/4 m-auto text-center">
                            ¿Qué es lo siguiente que quieres probar? Piensa en algo que te
                            interese, como "receta sencilla de pollo para cenar", y a ver qué
                            descubres.
                        </p>
                        <Button
                            className="font-semibold bg-slate-700 w-24 m-auto text-yellow-200 px-2 rounded-3xl"
                        >Explorar</Button>
                    </article>
                </div>
            </section>
            <section className="p-10 overflow-hidden bg-slate-100">
                <div className="flex justify-center items-center flex-wrap">
                    <article className="w-2/4 px-4 py-16 flex flex-col gap-4">
                        <h2 className="text-6xl font-bold text-center">
                            Guarda las ideas que te gusten
                        </h2>
                        <p className="text-2xl w-3/4 m-auto text-center">
                            Colecciona tus favoritos para poder verlos más tarde.
                        </p>
                        <Button
                            className="font-semibold bg-slate-700 w-24 m-auto text-slate-100 px-2 rounded-3xl"
                        >Explorar</Button>
                    </article>
                    <article className="max-w-md flex justify-evenly flex-wrap py-12 gap-2">
                        <figure className="w-48 relative principal">
                            <Img
                                src="https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png"
                                className="w-full object-cover"
                            />
                        </figure>
                        <figure className="w-48 relative principal1">
                            <Img
                                src="https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png"
                                className="w-full object-cover"
                            />
                        </figure>
                        <figure className="w-48 relative principal2">
                            <Img
                                src="https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png"
                                className=" w-full object-cover"
                            />
                        </figure>
                        <figure className="w-48 relative principal3">
                            <Img
                                src="https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png"
                                className=" w-full object-cover"
                            />
                        </figure>
                    </article>
                </div>
            </section>
            <section className="p-10 overflow-hidden bg-pink-100">

                <div className="flex justify-between items-center flex-wrap">
                    <article className="w-2/4 relative sesion3camb m-auto">
                        <Img
                            src="https://s.pinimg.com/webapp/shop-bd0c8a04.png"
                            className="w-full object-cover rounded-md"
                        />
                        <figure className="w-24 absolute bottom-3 left-9">
                            <Img
                                src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png"
                                className=" w-full object-cover"
                            />
                        </figure>
                    </article>
                    <article className="max-w-lg px-11 py-16 flex flex-col gap-4 m-auto">
                        <h2 className="text-6xl font-bold text-center">
                            Míralo, fabrícalo, pruébalo, hazlo
                        </h2>
                        <p className="text-2xl w-3/4 m-auto text-center">
                            Lo mejor de Pinterest es descubrir cosas e ideas nuevas de personas de todo el mundo.
                        </p>
                        <Button
                            className="font-semibold bg-red-700 w-24 m-auto text-slate-100 py-2 px-2 rounded-3xl"
                        >Explorar</Button>
                    </article>
                </div>
            </section>
            <footer className="flex justify-between bg-black/80 items-center flex-wrap relative overflow-hidden">
                <div className="footer absolute flex-wrap flex gap-3 justify-between top-0 left-0 right-0 bottom-0 -z-10">
                    <div className="-mt-16 flex flex-col gap-10 w-52">
                        <Img
                            src="https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/ad/95/72/ad95724c42d984bf497b713f022da48b.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/ad/95/72/ad95724c42d984bf497b713f022da48b.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                    </div>
                    <div className="-mt-4 flex flex-col gap-10 w-52">
                        <Img
                            src="https://i.pinimg.com/550x/8e/66/3e/8e663eb86a99300280e9f1baab222188.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/94/8e/00/948e0049adfd6c668f1af1190574f726.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/ca/60/2c/ca602cc8e0cd99aa36e6c15451e70eb3.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                    </div>
                    <div className="-mt-16 flex flex-col gap-10 w-52">
                        <Img
                            src="https://i.pinimg.com/550x/e3/b1/6d/e3b16d726605cab53cd617766201386b.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/a2/f0/1e/a2f01e52288c781082c35077339ce914.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                    </div>
                    <div className="-mt-4 flex flex-col gap-10 w-52">
                        <Img
                            src="https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/43/e8/58/43e8586f0566075d55e2ca370c839ff0.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg"
                            className="w-full h-80 rounded-xl object-cover"
                        />
                    </div>
                    <div className="-mt-16 flex flex-col gap-10 w-52">
                        <Img
                            src="https://i.pinimg.com/550x/ba/db/b5/badbb52712872fe96a6e9ea9c5274688.jpg"
                            className="w-full h-80 rounded-xl"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg"
                            className="w-full h-80 rounded-xl"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/32/95/26/3295260723631db47f44afca9a8841d7.jpg"
                            className="w-full h-80 rounded-xl"
                        />
                    </div>
                    <div className="-mt-4 flex flex-col gap-10 w-52">
                        <Img
                            src="https://i.pinimg.com/550x/74/b5/dd/74b5dd70099c1ab5a6bcb4467845f5c1.jpg"
                            className="w-full h-80 rounded-xl"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/8b/92/12/8b92123edb5b8bc830c8dbca3267a538.jpg"
                            className="w-full h-80 rounded-xl"
                        />
                        <Img
                            src="https://i.pinimg.com/550x/be/4f/77/be4f77a807c33f3594625ce3056d4835.jpg"
                            className="w-full h-80 rounded-xl"
                        />
                    </div>
                </div>
                <article className="w-1/2 p-4">
                    <h2 className="text-8xl w-3/4 m-auto text-white">Regístrate para ver ideas</h2>
                </article>
                <article className="max-w-lg p-14">
                    <Registro style="bg-white w-full p-7 rounded-xl" />
                </article>
            </footer>
        </>
    )


}