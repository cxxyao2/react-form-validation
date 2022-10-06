import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'
import Admin from './components/Admin'
import FeaturedProducts from './components/FeaturedProducts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import OrderSummary from './components/OrderSummary'
import NewProducts from './components/NewProducts'
import Products from './components/Products'
import UserDetails from './components/UserDetails'
import Users from './components/Users'
import Profile from './components/Profile'
import React from 'react'
import { AuthProvider } from './components/auth'
import Login from './Login'
import RequiredAuth from './components/RequiredAuth'
import RegisterUser from './components/RegisterUser'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='about'
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='feature' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':user' element={<UserDetails />} />
          <Route path='admin' element={Admin} />
        </Route>
        <Route
          path='profile'
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<RegisterUser />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
