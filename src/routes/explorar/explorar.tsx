import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'
import { SectionHome } from '@/modules/explorar/components/section-home'
import { ExplorarSection } from '@/modules/explorar/type/sections'
import { useValidateUser } from '@/hooks/useValidateUser'

export function Explorar() {
  const [_, setLocatation] = useLocation()
  useValidateUser()
  return (
    <>
      <Helmet>
        <title>Explorar categorías del clon de Pinterest</title>
        <meta name="description" content="explorar las categorías que tiene el clone de Pinterest" />
      </Helmet>
      <div className="mt-16">
        <h1 className="text-5xl font-bold w-full text-center">Categorías</h1>
        <section className="p-7 flex justify-evenly items-center flex-wrap">
          {ExplorarSection.map((section, index) => (
            <SectionHome
              key={index}
              handle={() => setLocatation(section.handle)}
              parragraf={section.parragraf}
              title={section.title}
              src={section.src}
            />
          ))}
        </section>
        //
        {' '}
      </div>
    </>
  )
}
