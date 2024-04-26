import { Home } from './routes/home'
import { Route } from 'wouter'
import { Perfil } from './routes/perfil'
import { PageHome } from './routes/pagehome'
import SavePin from './routes/savepin'

export default function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/perfil' component={Perfil} />
      <Route path='/home' component={PageHome} />
      <Route path='/home/save-imagen' component={SavePin} />
    </>
  )
}
