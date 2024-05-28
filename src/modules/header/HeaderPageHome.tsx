import { Bell, MessageCircleMore, Search } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { Avatar } from 'flowbite-react'
import { LogoPinterest } from '@/icons/LogoPinterest'
import { Perfil } from '@/modules/perfil/components/Perfil'
import { UserState } from '@/store/user'

export function HeaderPageHome() {
  const [_, setLocation] = useLocation()
  const user = UserState(state => state.user)

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === 'option2') {
      setLocation('/home/save-imagen')
    }
    else {
      setLocation('/home')
    }
  }
  const handleOptionChangeMovil = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === 'option1') {
      setLocation('/home')
    }
    else if (value === 'option2') {
      setLocation('/home/Explorar')
    }
    else if (value === 'option3') {
      setLocation('/home')
    }
    else if (value === 'option4') {
      setLocation('/home/save-imagen')
    }
  }
  return (
    <>
      <header className="p-1 flex justify-evenly items-center sticky z-30 top-0 w-full bg-white">
        <section className="flex justify-between">
          <Link
            to="/home"
            className="flex w-14 h-14 justify-center items-center rounded-full p-2 hover:bg-slate-300"
          >
            <LogoPinterest />
          </Link>
          <select
            onChange={handleOptionChangeMovil}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-auto md:hidden"
          >
            <option value="option1">Inicio</option>
            <option value="option2">Explorar</option>
            <option value="option3">Crear Idea Pin</option>
            <option value="option4">Crear Pin</option>
          </select>
          <div className="hidden md:flex items-center">
            <div>
              <button
                onClick={() => setLocation('/home')}
                className="rounded-full focus:text-white text-black px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg focus:bg-black"
              >
                Inicio
              </button>
            </div>
            <div>
              <button
                onClick={() => setLocation('/home/explorar')}
                className="rounded-full focus:text-white text-black px-2 py-1 text-sm sm:px-3 sm:py-1 md:px-4 md:py-2 sm:text-base md:text-lg focus:bg-black"
              >
                Explorar
              </button>
            </div>
            <div>
              <select
                onChange={handleOptionChange}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="options0">Crear</option>
                <option value="option1">Crear Idea Pin</option>
                <option value="option2">Crear Pin</option>
              </select>
            </div>
          </div>
        </section>
        <form className="w-2/6 relative hidden md:block">
          <label className="absolute top-1/2 -translate-y-1/2 left-2">
            <Search className="text-slate-600" />
          </label>
          <input
            // onChange={handleChange}
            type="text"
            className="rounded-full p-2 pl-9 w-full bg-slate-200 border-0"
            placeholder="Buscar"
          />
        </form>
        <div className="flex justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <figure>
            <Bell className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lg text-gray-600" />
          </figure>
        </div>
        <div className="flex justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <figure>
            <MessageCircleMore className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lg text-gray-600" />
          </figure>
        </div>
        {!(user as { photoURL: string }).photoURL
          ? (
            <Avatar
              placeholderInitials={(user as { email: string }).email
                .slice(0, 1)
                .toUpperCase()}
              rounded
            />
            )
          : (
            <div className="w-9">
              <Avatar
                img={(user as { photoURL: string }).photoURL}
                alt={`avatar of ${(user as { displayName: string }).displayName}`}
                rounded
              />
            </div>
            )}
        <div className="flex w-9 h-9 justify-center items-center rounded-full p-2 hover:bg-slate-300">
          <Perfil />
        </div>
      </header>
    </>
  )
}
