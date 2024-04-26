import { Home } from './routes/home'
import { Route } from 'wouter'
import { Perfil } from './routes/perfil'
import { PageHome } from './routes/pagehome'
import SavePin from './routes/savepin'
import { Explorar } from './routes/explorar/explorar'
import { ExplorarSecion } from './routes/explorar/[name]/section'

export default function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/perfil' component={Perfil} />
      <Route path='/home' component={PageHome} />
      <Route path='/home/save-imagen' component={SavePin} />
      <Route path='/home/explorar' component={Explorar} />
      <Route path="/home/explorar/:title">
        {({ title }) => <>
          {title === 'recetas' && <ExplorarSecion title={title} url='https://i.pinimg.com/736x/55/73/94/557394fd3c32b79870aad69037c58908.jpg' parragraf='La manzana es el ingrediente perfecto para hacer tortas o hasta servir de aderezo en las ensaladas. Guarda tu receta preferida para darles una oportunidad en tu menú semanal.' subtitle='Dulces o Saladas' filter='dulces' />}
          {title === 'frases-motivacionales' && <ExplorarSecion title={title} url='https://i.pinimg.com/564x/ce/81/a5/ce81a58e62ae23fcbf0588c835af2650.jpg' parragraf='Si estás sintiendo un bajón, no hay problema. Abraza tus sentimientosy toma un tiempo para reflejar con estas citaciones bonitas que te ayudarán a encontrar la motivación que estás buscando.' filter='frases' subtitle='Fraces Motivacionales' />}
          {title === 'futbol' && <ExplorarSecion title={title} url='https://i.pinimg.com/474x/78/d9/e6/78d9e61421c7a59243e86fd99d83831a.jpg' parragraf='captura momentos emocionantes y memorables del deporte más popular del mundo. Desde jugadas espectaculares hasta celebraciones apasionadas, estas imágenes transmiten la intensidad y la belleza del juego.' filter='futbol' subtitle='Amantes al futbol' />}
          {title === 'autos' && <ExplorarSecion title={title} url='https://i.pinimg.com/474x/15/2e/75/152e756d6cc7430e99125d61a694c7f2.jpg' parragraf='Descubre nuestra galería de fotos de carros, donde la elegancia y la potencia se fusionan en imágenes cautivadoras. Explora una variedad de modelos y marcas que despiertan la pasión por la conducción.' filter='carros' subtitle='encantado de los autos' />}
        </>}
      </Route>
    </>
  )
}
