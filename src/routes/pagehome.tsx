import { Helmet } from 'react-helmet'
import { Pin } from '@/modules/pin/Pin'
import { useValidateUser } from '@/hooks/useValidateUser'

export function PageHome() {
  useValidateUser()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Clone Pinterest</title>
        <meta name="description" content="Home Clone Pinterest" />
      </Helmet>
      <div className="w-full flex justify-center items-center">
        <div className="container columns-3 md:columns-4 lg:columns-6 xl:columns-7 2xl:columns-8 py-4">
          <Pin />
        </div>
      </div>
    </>
  )
}
