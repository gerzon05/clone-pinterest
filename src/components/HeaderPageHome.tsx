import { Bell, ChevronDown, MessageCircleMore, Search } from 'lucide-react'
import { LogoPinterest } from './icons/LogoPinterest'
import { Perfil } from './Perfil'
import { CurrentUser, PerfilState } from '@/store/state'
import { Link } from '@tanstack/react-router'

export const HeaderPageHome = () => {
  // const { user } = useAuth();
  const { perfiltrue } = PerfilState()
  const user = CurrentUser((state) => state.user)
  // const [mostrar, setMostrar] = useState(false);
  // // const navigate = useNavigate();
  const handlePerfil = () => {
    perfiltrue()
  }
  // const handleOptionChange = (event) => {
  //   const selectedOption = event.target.value;
  //   if (selectedOption === "option1") {
  //     // navigate("/savepin");
  //   } else if (selectedOption === "option2") {
  //     // navigate("/savepin");
  //   }
  // };
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   buscador(event.target.value);
  // };
  // const handeclickperfil = () => {
  //   // navigate("/mi-perfil");
  // };
  // const handeclickexplorar = () => {
  //   // navigate("/explorar");
  // };
  return (
    <>
      <header className='p-1 flex justify-evenly items-center sticky z-30 top-0 w-full bg-white'>
        <section className='flex justify-between'>
          <Link
            to='/pagehome'
            className='flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300'
          >
            <LogoPinterest />
          </Link>
          <div className='md:flex items-center'>
            <div>
              <button
                // onClick={handeclick}
                className='rounded-full focus:text-white text-black px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg focus:bg-black'
              >
                Inicio
              </button>
            </div>
            <div>
              <button
                // onClick={handeclickexplorar}
                className='rounded-full focus:text-white text-black px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg focus:bg-black'
              >
                Explorar
              </button>
            </div>
            <div>
              <select
                // onChange={handleOptionChange}
                className='flex justify-center items-center border-0 w-28'
              >
                <option>Crear</option>
                <option value='option1'>Crear Idea Pin</option>
                <option value='option2'>Crear Pin</option>
              </select>
            </div>
          </div>
        </section>
        <form className='w-2/6 relative'>
          <label className='absolute top-1/2 -translate-y-1/2 left-2'>
            <Search className='text-slate-600' />
          </label>
          <input
            // onChange={handleChange}
            type='text'
            className='rounded-full p-2 pl-9 w-full bg-slate-200 border-0'
            placeholder='Buscar'
          />
        </form>
        <div className='flex justify-center items-center rounded-full p-2 hover:bg-slate-300'>
          <figure>
            <Bell className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lg text-gray-600' />
          </figure>
        </div>
        <div className='flex justify-center items-center rounded-full p-2 hover:bg-slate-300'>
          <figure>
            <MessageCircleMore className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lg text-gray-600' />
          </figure>
        </div>
        <div className='flex sm:w-10 md:w-10 sm:h-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 w-9 h-9 justify-center items-center rounded-full p-2 hover:bg-slate-300'>
          <figure>
            <img
              src={
                (user as { photoURL: string }).photoURL ||
                'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
              }
              className='rounded-full object-cover'
              alt='foto de perfil'
            />
          </figure>
        </div>
        <div className='flex w-10 h-10 justify-center items-center rounded-full p-2 hover:bg-slate-300'>
          <button
            onClick={handlePerfil}
            className='border-0 border-white rounded-full bg-white'
          >
            <ChevronDown className='text-3xl' />
          </button>
        </div>
        <Perfil />
      </header>
    </>
  )
}
