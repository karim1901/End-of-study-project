import React, { useEffect, useRef,useState } from "react";
import { dashboard } from "../../icon";
import { NavLink, useParams } from "react-router-dom";


function Menu(){

    const {token} = useParams()

    // const [activeLink, setActiveLink] = useState('dashboard');
    // const dashboardRef = useRef(null);
    // const productsRef = useRef(null);
  
    // useEffect(() => {
    //   if (dashboardRef.current && productsRef.current) {
    //     dashboardRef.current.classList.toggle('active', activeLink === 'dashboard');
    //     productsRef.current.classList.toggle('active', activeLink === 'products');
    //   }
    // }, [activeLink]);


    return <div className="menu">
        <ul>
            <NavLink  to={`/myEcom/dashboard`} >
            <li>
                {dashboard}
                <p>Dashboard</p>
            </li>
            </NavLink>
            <NavLink  to={`/myEcom/products`} >
            <li>
                <ion-icon name="cube-outline"></ion-icon>
                <p>Products</p>
            </li>
            </NavLink>

            <NavLink to={`/myEcom/customers`}>
                <li>
                    <ion-icon name="people-outline"></ion-icon>
                    <p>Customers</p>
                </li>
            </NavLink>

            {/* <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1.66669C5.40529 1.66669 1.66669 5.40529 1.66669 10C1.66669 14.5947 5.40529 18.3334 10 18.3334C14.5947 18.3334 18.3334 14.5947 18.3334 10C18.3334 5.40529 14.5947 1.66669 10 1.66669ZM10.4167 2.52525C14.217 2.73511 17.2623 5.79419 17.4665 9.59637H10.4167V2.52525ZM10 17.5C5.86428 17.5 2.50002 14.1358 2.50002 10C2.50002 6.00491 5.64186 2.73928 9.58335 2.52113V10C9.58335 10.0733 9.60288 10.1449 9.63951 10.2084L13.3793 16.6866C12.3623 17.2026 11.2164 17.5 10 17.5ZM14.0975 16.2647L10.7291 10.4297H17.4589C17.3213 12.791 16.0776 14.9681 14.0975 16.2647Z" fill="black"/>
                </svg>
                <p>Analtics</p>
            </li> */}
            <NavLink to={`/myEcom/employees`} >
                <li>
                    <ion-icon name="people-circle-outline"></ion-icon>
                    <p>Employees</p>
                </li>
            </NavLink>

            <li>
                <ion-icon name="settings-outline"></ion-icon>
                <p>Settings</p>
            </li>
        </ul>
    </div>
}


export default Menu


