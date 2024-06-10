import React from 'react'
import './App.css'
import IndexParte1 from './parte1'
import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom'
import Products from './parte1/paroduct_page/products'
import Employees from './parte1/employee_page/employees'
import Customers from './parte1/customers_page/customers'
import Orders from './parte1/order_page/Orders'
import Confirmed from './parte1/confirmed_page/confirmed'
import Cancelling from './parte1/cancelling_page/cancelling'
import Dashboard from './parte1/dashboard_page/dashboard'
import RequireAuth from './auth/requireAuth'
import VerifyToken from './auth/verifyToken'

function App() {

  

  return (


    <div className='app' > 
      
          <Routes>

            <Route path='/myEcom/verifyToken/:token' element={<VerifyToken/>} />



            <Route path='/myEcom' element={<RequireAuth><IndexParte1/></RequireAuth>} >

              <Route index element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path='/myEcom/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path='/myEcom/products'  element={<RequireAuth><Products /></RequireAuth>} />
              <Route path='/myEcom/employees' element={<RequireAuth><Employees /></RequireAuth>} />
              <Route path='/myEcom/customers' element={<RequireAuth><Customers /></RequireAuth>} />
              <Route path='/myEcom/orders'    element={<RequireAuth><Orders /></RequireAuth>} />
              <Route path='/myEcom/confirmed' element={<RequireAuth><Confirmed /></RequireAuth>} />
              <Route path='/myEcom/cancelling'  element={<RequireAuth><Cancelling /></RequireAuth>} />
              
              
            </Route>




            {/* <Route path='/myEcom/employee' element={<IndexPart2/>} >
              <Route index element={<Home />} />
              <Route path='/myEcom/employee/home'   element={<Home />} />
              <Route path='/myEcom/employee/orders'   element={< />} />

            </Route> */}


         </Routes>



    </div>
  )
}

export default App
