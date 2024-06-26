import { Button } from 'flowbite-react'
import { ArrowLeft } from 'lucide-react'
import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'
import { UserState } from '@/store/user'
import { StateImage } from '@/store/hookimage'

export default function ShowImage() {
  const image = StateImage(state => state.image)
  const [_, setLocation] = useLocation()
  const { setImage } = StateImage()
  const user = UserState(state => state.user)

  function handelPreview() {
    setImage({})
    setLocation('/home')
  }
  if (!user) {
    setLocation('/')
  }
  return (
    <>
      <Helmet>
        <title>{`Imagen ${image.title}`}</title>
        <meta name="description" content="imagen del clone de Pinterest" />
      </Helmet>
      <div className="p-10">
        <Button
          className="bg-slate-900/70 rounded-full w-12 h-12"
          onClick={() => handelPreview()}
        >
          <ArrowLeft />
        </Button>
        <article className="flex p-3 justify-evenly flex-wrap h-[80vh]">
          <img
            src={image.image}
            alt={image.title}
            className="rounded-md  w-96 h-full object-cover"
          />
          <div className="text-center md:text-start text-xl flex flex-col gap-3 p-6 justify-center">
            <h2 className="font-bold text-5xl uppercase">
              {image.title.replace(/ /g, ' ')}
            </h2>
            <p>{image.description}</p>
          </div>
        </article>
      </div>
    </>
  )
}
