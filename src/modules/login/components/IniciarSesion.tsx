import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useLocation } from 'wouter'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '../../../ui/Button'
import { LogoPinterest } from '../../../icons/LogoPinterest'
import { Facebook } from '../../../icons/Facebook'
import { Google } from '../../../icons/Google'
import { Login } from '../hooks/loginstate'
import { UserState } from '../../../store/user'
import { auth } from '../../../firebase/firebase'
import { LinkA } from '../../../ui/LinkA'

interface Props { style: string }

interface FormData {
  email: string
  password: string
}

export default function IniciarSesion(props: Props) {
  const { register, handleSubmit } = useForm<FormData>()
  const [_, setLocation] = useLocation()

  const { convertfalse } = Login()
  const { usercontent } = UserState()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredencial) => {
          usercontent(userCredencial.user)
          setLocation('/home')
          convertfalse()
        },
      )
    }
    catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        toast.error('ERROR', { description: 'Contraseña incorrecta' })
      }
      else if (error.code === 'auth/user-not-found') {
        toast.error('ERROR', { description: 'el correo no existe' })
      }
      else if (error.code === 'auth/too-many-requests') {
        toast.error('ERROR', {
          description:
            'tu cuenta se deshabilitado temporalmente, intente mas tarde',
        })
      }
      else {
        toast.error('Error al iniciar sesion')
      }
    }
    finally {
      // loading.setLoad(false)
      setLocation('/')
    }
  })
  const handlegoogle = async () => {
    const googleprovide = new GoogleAuthProvider()
    await signInWithPopup(auth, googleprovide)
      .then((userCredencial) => {
        setLocation('/home')
        convertfalse()
        usercontent(userCredencial.user)
      })
      .catch((error: any) => {
        toast.error(error.code)
      })
  }
  const handlefacebook = async () => {
    const facebookprovide = new FacebookAuthProvider()
    await signInWithPopup(auth, facebookprovide)
      .then((userCredencial) => {
        setLocation('/home')
        convertfalse()
        usercontent(userCredencial.user)
      })
      .catch((error: any) => {
        toast.error('ERROR', { description: error.code })
      })
  }
  return (
    <>
      <div className={props.style}>
        <Button
          onClick={() => convertfalse()}
          className="absolute right-2 top-0 text-4xl"
        >
          ×
        </Button>
        <figure className="flex justify-center">
          <LogoPinterest />
        </figure>
        <h2 className="text-xl font-semibold text-center text">
          Bienvenidos a Pinterest
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col w-4/5 m-auto gap-2">
          <div className="flex flex-col">
            <label>Correo</label>
            <input
              type="email"
              {...register('email')}
              placeholder="correo"
              className="rounded-2xl w-full border-spacing-1"
              required
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              {...register('password')}
              placeholder="ingrese su contraseña"
              className="rounded-2xl w-full border-spacing-1"
              required
            />
          </div>
          <a>¿olvidate tu contraseña?</a>
          <Button
            placeholder="Continuar"
            className="w-full py-2 bg-red-700 text-white rounded-full"
          >
            Iniciar Sesion
          </Button>
          <b className="text-center">O</b>
        </form>
        <div className="flex flex-col w-4/5 m-auto gap-2">
          <Button
            onClick={handlefacebook}
            className="w-full py-2 bg-blue-700 text-white rounded-full flex justify-evenly items-center"
          >
            <Facebook />
            {' '}
            Continuar con Facebook
          </Button>
          <Button
            onClick={handlegoogle}
            className="w-full py-2 border-2 border-zinc-300 text-black rounded-full flex justify-evenly items-center"
          >
            <Google />
            {' '}
            Continuar con Google
            {' '}
          </Button>
          <p className="text-center text-xs w-full m-auto">
            Si continúas, aceptas los
            <LinkA
              href="https://policy.pinterest.com/es/terms-of-service"
              className="font-extrabold px-1"
            >
              Términos del servicio
            </LinkA>
            de Pinterest y confirmas que has leído nuestra
            <LinkA
              href="https://policy.pinterest.com/es/privacy-policy"
              className="font-extrabold px-1"
            >
              Política de privacidad.
            </LinkA>
            <LinkA
              href="https://policy.pinterest.com/es/notice-at-collection"
              className="font-extrabold px-1"
            >
              Aviso de recopilación de datos.
            </LinkA>
          </p>
        </div>
      </div>
    </>
  )
}
