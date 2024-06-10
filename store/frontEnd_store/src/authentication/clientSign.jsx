import { useState } from "react"
import bg from './components/img/login.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";







function SignupClient(){

    const Navigate = useNavigate()

    const[clientSign,setClientSign] = useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        userName:'',
        password:'',
        confirm:'',
        role:"customer"
    })

    const [loading ,setLoading] = useState(false)


    useEffect(()=>{
        axios.post('http://localhost:8001/verifyToken', {}, {
            headers: {
                auth: localStorage.getItem('tsx')
            }
        }).then((result) => {
            if(result.data.status){
                Navigate('/home')
            }
        })

    },[])


    const onhandler=(e)=>{
        setClientSign({
            ...clientSign,
            [e.target.name]:e.target.value
        })
    }


    const signup = ()=>{
        axios.post('http://localhost:8001/signUp',clientSign).then((res)=>{
            console.log(res)
            Navigate('/login')
        })
    }


    useEffect(()=>{
        axios.post('http://localhost:8001/verifyToken', {}, {
            headers: {
                auth: localStorage.getItem('tsx')
            }
        }).then((result) => {
            console.log(result.data.user);
            if(result.data.status){
                Navigate('/home')
            }

            auth.setUser(result.data.user)
            setLoading(true)
        })

    },[])


    return   <div className="signupClient">

        <Link to='/home'>
            <div className="logo">
                <div className="dot">
                    <p>.com</p>
                </div>
                <p>ZenithOutlet</p>
            </div>
        </Link>





        <img src={bg} alt="" />

        <form action=""  >
            <h2>SIGN UP</h2> 

            <div className="fullName">                   
                <input type="text" className="inputForm" name="firstName" value={clientSign.firstName} onChange={onhandler} placeholder="First Name" />
                <input type="text" className="inputForm" name="lastName" value={clientSign.lastName} onChange={onhandler} placeholder="Last Name" />
            </div>

            <div className="phone">
                <input type="text" className="inputForm" name="phone" value={clientSign.phone} onChange={onhandler} placeholder="Phone" />
            </div>

            <div className="mail">
                <input type="text" className="inputForm" name="email" value={clientSign.email} onChange={onhandler} placeholder="E-Mail" />
            </div>

            <div className="username">
            <input type="text" className="inputForm" name="userName" value={clientSign.userName} onChange={onhandler} placeholder="User Name" />
            </div>

            <div className="pw">
                <input type="password" className="inputForm" name="password" value={clientSign.password} onChange={onhandler} placeholder="Password"/>
                <input type="password" className="inputForm" name="confirm" value={clientSign.confirm} onChange={onhandler} placeholder="Confirm Password"/>
            </div>

            <button type="button" onClick={signup}><strong>SIGN UP</strong></button>

            <div className="log">
                <p>Already have an account?</p>
                <strong><Link to="/login">Sign In</Link></strong>
            </div>

            <div className="socialMedia">
                <p>Or</p>
                <div className="media">
                    <ion-icon name="logo-google"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>

        </form> 
    </div>
}

export default SignupClient