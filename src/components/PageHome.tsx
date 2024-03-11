// import { useAuth } from "../context/authContext";
import { Pin } from './Pin'

export const NuevoPageHome = () => {
  // const { loading } = useAuth();

  // if (loading) return <h2>loading</h2>;

  // const [estabus, setEstaBus] = useState("")

  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <div className='container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4'>
          <Pin />
        </div>
      </div>
    </>
  )
}
