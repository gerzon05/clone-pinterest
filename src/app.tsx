import Layout from './layout/layout'
import { Home } from './routes/home'
import { Route } from 'wouter'

export default function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Layout />
    </>
  )
}
