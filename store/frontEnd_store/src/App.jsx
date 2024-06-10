
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './Home/indexPage'
import Home from './Home/homeContainer/home'
import Catalog from './catalog/catalog'
import ItemProduct from './productItem/itemProduct'
import MyCart from './cart/myCart'
import Store from './store/store'
import Login from './authentication/login'
import SignupClient from './authentication/clientSign'
import SignupMerchant from './authentication/signupMerchant'
import Stores from './stores/stores'
import OrderHistory from './order_history/orderHistory'
import RequireAuth from './auth/requireAuth'
import IsAuth from './auth/isAuth'

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RequireAuth><IndexPage/></RequireAuth>}>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/item/:id' element={<ItemProduct/>} />
            <Route path='/cart' element={<IsAuth><MyCart/></IsAuth>} />
            <Route path='/store/:id' element={<Store/>} />
            <Route path='/stores' element={<Stores/>} />
            <Route path='/orderHistory' element={<IsAuth><OrderHistory/></IsAuth>} />
          </Route>
          <Route >
            <Route path='/logIn' element={<Login/>} />
            <Route path='/client' element={<SignupClient/>} />
            <Route path='/merchant' element={<SignupMerchant/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
