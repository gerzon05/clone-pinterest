import { UserState } from '@/hooks/user'
import { useLocation } from 'wouter'
import { Pin } from '@/modules/pin/Pin'

export function PageHome() {
  const user = UserState((state) => state.user)
  const [_, setLocatation] = useLocation()
  console.log(user)
  if (user == null) {
    console.log('no hay usuario')
    setLocatation('/')
  }
  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <div className='container columns-4 md:columns-6 lg:columns-7 xl:columns-8 2xl:columns-9 py-4'>
          <Pin />
        </div>
      </div>
    </>
  )
}
