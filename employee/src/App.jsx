import { Route, Routes } from "react-router-dom"
import IndexPart2 from "./part2"
import Home from "./part2/home_page/home"
import Orders from "./part2/order_page/Orders"
import Confirmed from "./part2/confirmed_page/confirmed"
import Cancelling from "./part2/cancelling_page/cancelling"
import VerifyToken from "./auth/verifyToken"
import RequireAuth from "./auth/requireAuth"

function App() {

  return (
    <Routes>

      <Route path='/myEcom/verifyToken/:token' element={<VerifyToken/>} />



      <Route path='/myEcom/employee' element={<RequireAuth><IndexPart2/></RequireAuth>} >

        <Route index element={<Orders/>} />
        <Route path="/myEcom/employee/orders" element={<Orders/>} />
        <Route path="/myEcom/employee/confirmed" element={<Confirmed/>} />
        <Route path="/myEcom/employee/cancelling" element={<Cancelling/>} />
        {/* <Route path="/myEcom/employee/delivered" element={<Orders/>} /> */}

      </Route>


    </Routes>
  )
}

export default App
