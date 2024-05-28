import { useLocation } from 'wouter'
import { SectionHome } from '@/modules/explorar/components/section-home'
import { ExplorarSection } from '@/modules/explorar/type/sections'
import { useValidateUser } from '@/hooks/useValidateUser'

export function Explorar() {
  const [_, setLocatation] = useLocation()
  useValidateUser()
  return (
    <>
      <div className="mt-16">
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
