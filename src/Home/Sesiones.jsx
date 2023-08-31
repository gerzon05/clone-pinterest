import { Button } from "../components/Button";
import { Imagenes } from "../components/Imagenes";

export const Sesiones = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <article className="max-w-md flex justify-evenly flex-wrap py-12 gap-2">
        <Imagenes
          src="https://s.pinimg.com/webapp/center-77497603.png"
          style=" w-48 object-cover"
        />
        <Imagenes
          src="https://s.pinimg.com/webapp/topRight-d0230035.png "
          style=" w-48 object-cover"
        />
        <Imagenes
          src="https://s.pinimg.com/webapp/left-511a9304.png"
          style=" w-48 object-cover"
        />
        <Imagenes
          src="https://s.pinimg.com/webapp/right-88044782.png"
          style=" w-48 object-cover"
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
          placeholder="Explorar"
          style="font-semibold bg-slate-700 w-24 m-auto text-yellow-200 px-2 rounded-3xl"
        />
      </article>
    </div>
  );
};

export const Sesion2 = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <article className="w-2/4 px-4 py-16 flex flex-col gap-4">
        <h2 className="text-6xl font-bold text-center">
          Guarda las ideas que te gusten
        </h2>
        <p className="text-2xl w-3/4 m-auto text-center">
          Colecciona tus favoritos para poder verlos más tarde.
        </p>
        <Button
          placeholder="Explorar"
          style="font-semibold bg-slate-700 w-24 m-auto text-slate-100 px-2 rounded-3xl"
        />
      </article>
      <article className="max-w-md flex justify-evenly flex-wrap py-12 gap-2">
        <figure className="w-48 relative principal">
          <Imagenes
            src="https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png"
            style="w-full object-cover"
          />
        </figure>
        <figure className="w-48 relative principal1">
          <Imagenes
            src="https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png"
            style="w-full object-cover"
          />
        </figure>
        <figure className="w-48 relative principal2">
          <Imagenes
            src="https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png"
            style=" w-full object-cover"
          />
        </figure>
        <figure className="w-48 relative principal3">
          <Imagenes
            src="https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png"
            style=" w-full object-cover"
          />
        </figure>
      </article>
    </div>
  );
};
export const Sesion3 = () => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <article className="w-2/4 relative sesion3camb m-auto">
        <Imagenes
          src="https://s.pinimg.com/webapp/shop-bd0c8a04.png"
          style="w-full object-cover"
        />
        <figure className="w-24 absolute bottom-3 left-9">
          <Imagenes
            src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png"
            style=" w-full object-cover"
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
          placeholder="Explorar"
          style="font-semibold bg-red-700 w-24 m-auto text-slate-100 py-2 px-2 rounded-3xl"
        />
      </article>
    </div>
  );
};
