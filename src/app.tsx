import { UserState } from './hooks/user'
import Layout from './layout/layout'
import { Home } from './routes/home'
import { Route } from 'wouter'

export default function App() {
  const user = UserState((state) => state.user)
  return (
    <>
      <Route path='/' component={Home} />
      {user && <Layout />}
    </>
  )
}
