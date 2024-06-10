import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import bg from './components/img/login.png'
import axios from "axios"
import { useEffect } from "react"
import { useAuth } from "../auth/authContext"





function Login(){

    const [loading ,setLoading] = useState(false)

    const auth = useAuth()

    const[userLog,setUserLog]= useState({
        userName:'',
        password:''
    })

    const onhandler=(e)=>{
        setUserLog({
            ...userLog,
            [e.target.name]:e.target.value
        })
    }



    // const [userLogin , setUserLogin] =useState({
    //     userName:"",
    //     password:''
    // })

    const Navigate = useNavigate()


    const login = ()=>{
        axios.post('http://localhost:8001/login',userLog).then((res)=>{
            if(res.status == 200){
                localStorage.setItem('tsx',res.data.token)

                if(res.data.user.role == 'marchent'){
                    window.location.href = `http://localhost:5173/myEcom/verifyToken/${res.data.token}`
                }else if(res.data.user.role == 'employee'){
                    window.location.href = `http://localhost:5175/myEcom/verifyToken/${res.data.token}`
                }
                else{
                    Navigate('/home')
                }
            }
        }).catch((error)=>{
            console.log(error.message)
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


    return loading && <div className="loginContainer" >
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
            <h2>LOG IN</h2> 

            <div className="userName">                   
                <input type="text" className="inputForm" name="userName" value={userLog.userName} onChange={onhandler} placeholder="User name" />
            </div>

            <div className="pw">
                <input type="password" className="inputForm" name="password" value={userLog.password} onChange={onhandler} placeholder="Password"/>
            </div>

            <div className="forget"> 
                <strong><Link>Forget your password?</Link></strong>
            </div>


            <button type="button" onClick={login}><strong>SUBMIT</strong></button>


            <div className="create">
               <strong><Link to='/client'>Create an Account</Link></strong>
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

export default Login