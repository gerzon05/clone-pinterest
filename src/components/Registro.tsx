import { LogoPinterest } from './icons/LogoPinterest'
import { Button } from './ui/Button'
import { Facebook } from './icons/Facebook'
import { Google } from './icons/Google'
import { Register, AuthRegister, ErrorSaveRegister, Login } from '@/store/state'
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { LinkA } from './ui/LinkA'
import { useNavigate } from '@tanstack/react-router'

type Props = {
  style?: string
}

export const Registro = (props: Props) => {
  const error = ErrorSaveRegister((state) => state.error)
  const Registerstate = Register((state) => state.bool)
  const AuthEmail = AuthRegister((state) => state.email)
  const AuthPassword = AuthRegister((state) => state.password)

  const { errorcontentregister } = ErrorSaveRegister()
  const { emailcontent, passwordcontent } = AuthRegister()
  const { regifalse } = Register()
  const { converttrue, convertfalse } = Login()

  const navigate = useNavigate({ from: '/' })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    errorcontentregister('')
    await createUserWithEmailAndPassword(auth, AuthEmail, AuthPassword)
      .then(() => {
        errorcontentregister('Se registro correctamente')
      })
      .catch((error: any) => {
        if (error.code === 'auth/weak-password') {
          errorcontentregister('la contraseña debe tener mas de 6 caracteres')
        } else if (
          error.code === 'auth/email-already-in-use' ||
          error.code === 'auth/invalid-email'
        ) {
          errorcontentregister('el correo ya esta en uso')
        }
      })
  }

  const handlegoogle = async () => {
    const googleprovide = new GoogleAuthProvider()
    await signInWithPopup(auth, googleprovide)
      .then(() => {
        navigate({ to: '/pagehome' })
        convertfalse()
      })
      .catch((error: any) => {
        console.log(error.code)
      })
  }
  const handlefacebook = async () => {
    const facebookprovide = new FacebookAuthProvider()
    await signInWithPopup(auth, facebookprovide)
      .then(() => {
        navigate({ to: '/pagehome' })
        convertfalse()
      })
      .catch((error: any) => {
        console.log(error.code)
      })
  }

  const handlelogin = () => {
    converttrue()
    regifalse()
  }
  return (
    <div className={props.style}>
      <div className='relative '>
        {Registerstate && (
          <Button
            onClick={() => regifalse()}
            className='absolute right-2 -top-8 text-4xl'
          >
            ×
          </Button>
        )}

        <div className='flex justify-center'>
          <LogoPinterest />
        </div>
        <h2 className='text-xl font-semibold text-center text'>
          Bienvenidos a Pinterest
        </h2>
        <p className='text-center'>Encuentra nuevas ideas para probar</p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col w-4/5 m-auto gap-2'
        >
          <div className='flex flex-col'>
            <label>Correo</label>
            <input
              required
              type='email'
              placeholder='correo'
              name='email'
              className='rounded-2xl w-full border-spacing-1'
              onChange={(event) => emailcontent(event.target.value)}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              required
              type='password'
              name='password'
              placeholder='crea una contraseña'
              className='rounded-2xl w-full border-spacing-1'
              onChange={(event) => passwordcontent(event.target.value)}
            />
            <p className='text-xs'>
              la contraseña debe tener mas de 6 caracteres
            </p>
            {error}
          </div>
          <Button className='w-full py-2 bg-red-700 text-white text-center rounded-full'>
            Registrarse
          </Button>
          <b className='text-center'>O</b>
        </form>
        <div className='flex flex-col w-4/5 m-auto gap-2'>
          <Button
            onClick={handlefacebook}
            className='w-full py-2 bg-blue-700 text-white rounded-full flex justify-evenly items-center'
          >
            <Facebook /> Continuar con Facebook{' '}
          </Button>
          <Button
            onClick={handlegoogle}
            className='w-full py-2 border-2 border-zinc-300 text-black rounded-full flex justify-evenly items-center'
          >
            <Google /> Continuar con Google
          </Button>
          <p className='text-center text-xs w-full m-auto'>
            Si continúas, aceptas los
            <LinkA
              href='https://policy.pinterest.com/es/terms-of-service'
              className='font-extrabold px-1'
            >
              Términos del servicio
            </LinkA>
            de Pinterest y confirmas que has leído nuestra
            <LinkA
              href='https://policy.pinterest.com/es/privacy-policy'
              className='font-extrabold px-1'
            >
              Política de privacidad.
            </LinkA>
            <LinkA
              href='https://policy.pinterest.com/es/notice-at-collection'
              className='font-extrabold px-1'
            >
              Aviso de recopilación de datos.
            </LinkA>
          </p>
          <p className='w-10/12 m-auto text-sm text-center'>
            ¿Ya eres miembro?
            <Button
              onClick={handlelogin}
              className='font-extrabold px-1 cursor-pointer'
            >
              Iniciar sesión
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
