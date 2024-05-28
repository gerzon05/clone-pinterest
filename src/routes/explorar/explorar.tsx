import { UserState } from '@/store/user'
import { SectionHome } from '@/modules/explorar/components/section-home'
import { ExplorarSection } from '@/modules/explorar/type/sections'
import { useLocation } from 'wouter'

export function Explorar() {
  const user = UserState((state) => state.user)
  const [_, setLocatation] = useLocation()
  if (user == null) {
    console.log('no hay usuario')
    setLocatation('/')
  }
  return (
    <>
      <div className='mt-16'>
        <section className='p-7 flex justify-evenly items-center flex-wrap'>
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
        //{' '}
      </div>
    </>
  )
}
