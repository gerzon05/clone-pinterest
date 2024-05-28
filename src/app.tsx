import { Route } from 'wouter'
import Layout from './layout/layout'
import { Home } from './routes/home'

export default function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Layout />
    </>
  )
}
