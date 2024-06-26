import { ArrowLeft } from 'lucide-react'
import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'
import { sectionMock } from './utils/sectionMock'
import { Pin } from '@/modules/pin/Pin'
import { SectionHome } from '@/modules/explorar/components/section-home'
import { UserState } from '@/store/user'

export function ExplorarSecion({ params }: { params: any }) {
  const user = UserState(state => state.user)
  const [_, setLocation] = useLocation()
  if (!user) {
    setLocation('/')
  }

  const { title } = params

  return (
    <>
      {sectionMock.map(
        (section, index) =>
          section.title === title && (
            <div key={index}>
              <Helmet>
                <title>{`Categoría de ${section.title}`}</title>
                <meta name="description" content="explorar las categorías que tiene el clone de Pinterest" />
              </Helmet>
              <div className="flex flex-col items-center justify-center relative">
                <button
                  onClick={() => setLocation('/home/explorar')}
                  className="absolute w-12 h-12 flex justify-center bg-white items-center rounded-full hover:bg-slate-300 left-3 top-3"
                >
                  <ArrowLeft className="text-3xl font-bold" />
                </button>
                <SectionHome
                  src={section.src}
                  parragraf={section.subtitle}
                  title={section.title}
                />
                <p className="w-[290px] sm:w-[600px] ms:w-[800px] py-3">
                  {section.parragraf}
                </p>
              </div>
              <div className="w-full mt-16 flex justify-center items-center">
                <div className="container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4">
                  <Pin filter={section.filter} />
                </div>
              </div>
            </div>
          ),
      )}
    </>
  )
}
