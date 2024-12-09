import React, { useState } from 'react'
import "./css/LoginSignup.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const LoginForm = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, Email, password)
      const user = userCredential.user

      setLoading(false)
      toast.success("Successfully logged in", {
        position: "top-center"
      })
      navigate('/')
    }

    catch (err) {
      setLoading(true)
      console.log(err);
      toast.error("user login faild", {
        position: "top-center"
      })
    }
  }

  return (
    <div className='login-Signup'>
      <div className="flexcol login-signup-container">
        {
          loading ? <h5>Loading...</h5> :
            <form action="" onSubmit={LoginForm}>
              <h2>Login</h2>
              <div className="loginsignup-fields">

                <label htmlFor="email">Enter Email</label>
                <input type="email"
                  id='email'
                  placeholder='Email Address..'
                  autoComplete="off"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Enter Password</label>
                <input
                  type="password"
                  id='password'
                  placeholder='Password..'
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className='button' type='submit'>Submit</button>
                <p className="liginsignUp-login">New User <Link to={"/register"}><span>Register here..</span></Link></p>
              </div>
            </form>
        }


      </div>

    </div>
  )
}
