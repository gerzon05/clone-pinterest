import { HeaderPageHome } from '@/modules/header/HeaderPageHome'
import { Explorar } from '@/routes/explorar/explorar'
import { ExplorarSecion } from '@/routes/explorar/section'
import { PageHome } from '@/routes/pagehome'
import { Perfil } from '@/routes/perfil'
import SavePin from '@/routes/savepin'
import ShowImage from '@/routes/showImage'
import { Route } from 'wouter'

export default function Layout() {
  return (
    <main>
      <HeaderPageHome />
      <Route path='/perfil' component={Perfil} />
      <Route path='/home' component={PageHome} />
      <Route path='/home/save-imagen' component={SavePin} />
      <Route path='/home/explorar' component={Explorar} />
      <Route path='/home/explorar/:title' component={ExplorarSecion} />
      <Route path='/home/img/:name' component={ShowImage} />
    </main>
  )
}
