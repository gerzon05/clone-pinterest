import { Pin } from '@/modules/pin/Pin'
import { useValidateUser } from '@/hooks/useValidateUser'

export function PageHome() {
  useValidateUser()
  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <div className='container columns-3 md:columns-4 lg:columns-6 xl:columns-7 2xl:columns-8 py-4'>
          <Pin />
        </div>
      </div>
    </>
  )
}
