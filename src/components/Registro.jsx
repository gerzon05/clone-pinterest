import { useState } from "react";
import { Button } from "./Button";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsGoogle, BsPinterest } from "react-icons/Bs";

export const Registro = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup, loginwhithgoogle, loginwhithfacebook, erroemail } =
    useAuth("");
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(user.email, user.password);
  };
  const handlegoogle = async () => {
    await loginwhithgoogle();
    navigate("/pagehome");
    console.log("como estas");
  };
  const handlefacebook = async () => {
    await loginwhithfacebook();
    navigate("/pagehome");
    console.log("como estas");
  };
  return (
    <div className={props.style}>
      <div className="relative ">
        <button
          onClick={props.envi}
          className="absolute right-2 -top-4 text-4xl"
        >
          ×
        </button>
        <BsPinterest className="text-4xl w-full text-red-700" />
        <h2 className="text-xl font-semibold text-center text">
          Bienvenidos a Pinterest
        </h2>
        <p className="text-center">Encuentra nuevas ideas para probar</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-4/5 m-auto gap-2"
        >
          <div className="flex flex-col">
            <label>Correo</label>
            <input
              required
              type="email"
              placeholder="correo"
              name="email"
              className="rounded-2xl w-full border-spacing-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              required
              type="password"
              name="password"
              placeholder="crea una contraseña"
              className="rounded-2xl w-full border-spacing-1"
              onChange={handleChange}
            />
            <p className="text-xs">
              la contraseña debe tener mas de 6 caracteres
            </p>
            {erroemail}
          </div>
          {/* <div>
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            name="date"
            className="rounded-2xl w-full border-spacing-1 "
            onChange={handleChange}
          />
        </div> */}
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
            imgf={<BsFacebook className="text-lg text-white" />}
            style="w-full py-2 bg-blue-700 text-white rounded-full flex justify-evenly items-center"
          />
          <Button
            click={handlegoogle}
            placeholder="Continuar con Google"
            imgf={<BsGoogle className="text-lg text-black" />}
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
          <p className="w-10/12 m-auto text-sm text-center">
            ¿Ya eres miembro?
            <a className="font-extrabold px-1">Iniciar sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
};
