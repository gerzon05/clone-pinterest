import { Button } from "./Button";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {BsFacebook, BsGoogle, BsPinterest} from "react-icons/Bs"


export const IniciarSesion = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginwhithgoogle, loginwhithfacebook, erropass } =
    useAuth("");
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(user.email, user.password);
  };
  const handlegoogle = async () => {
    await loginwhithgoogle();
    navigate("/pagehome");
  };
  const handlefacebook = async () => {
    await loginwhithfacebook();
    navigate("/pagehome");
  };
  return (
    <>
      <div className={props.style}>
        <button
          onClick={props.envi}
          className="absolute right-2 top-2 text-4xl"
        >
          ×
        </button>
        <BsPinterest className="text-4xl w-full text-red-700"/>
        <h2 className="text-xl font-semibold text-center text">
          Bienvenidos a Pinterest
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-4/5 m-auto gap-2"
        >
          <div className="flex flex-col">
            <label>Correo</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="correo"
              className="rounded-2xl w-full border-spacing-1"
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="ingrese su contraseña"
              className="rounded-2xl w-full border-spacing-1"
            />
          </div>
          <a>¿olvidate tu contraseña?</a>
          <p>{erropass}</p>
          <Button
            placeholder="Continuar"
            style="w-full py-2 bg-red-700 text-white rounded-full"
          />
          <b className="text-center">O</b>
        </form>
        <div className="flex flex-col w-4/5 m-auto gap-2">
          <Button
            click={handlefacebook}
            placeholder="Continuar con Facebook"
            imgf={<BsFacebook className="text-lg text-white"/>}
            style="w-full py-2 bg-blue-700 text-white rounded-full flex justify-evenly items-center"
          />
          <Button
            click={handlegoogle}
            placeholder="Continuar con Google"
            imgf={<BsGoogle className="text-lg text-black"/>}
            style="w-full py-2 border-2 border-zinc-300 text-black rounded-full flex justify-evenly items-center"
          />
          <p className="text-center text-xs w-full m-auto">
            Si continúas, aceptas los
            <a
              href="https://policy.pinterest.com/es/terms-of-service"
              className="font-extrabold px-1"
            >
              Términos del servicio
            </a>
            de Pinterest y confirmas que has leído nuestra
            <a
              href="https://policy.pinterest.com/es/privacy-policy"
              className="font-extrabold px-1"
            >
              Política de privacidad.
            </a>
            <a
              href="https://policy.pinterest.com/es/notice-at-collection"
              className="font-extrabold px-1"
            >
              Aviso de recopilación de datos.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
