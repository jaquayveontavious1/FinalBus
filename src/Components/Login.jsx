import React from 'react'
import { auth } from './Firebase/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import BusPicture from '../assets/images/NEW.jpg'
import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from 'react'
const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');
  const [type,setType] = useState('password')
  const [icon,setIcon] = useState(eyeOff)
  {/**const [message,setMessage] = useState('')*/}

  const handleToggle = () => {
    if (type == 'password') {
      setIcon(eye);
      setType(text)
    } else {
      setIcon(eyeOff);
      setType('password')
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth,email,password)
      alert ('Login Successful!! Please wait')
    }
    catch (error) {
      console.error('Error while logging in',error)
      alert('Login failed! Please try again')
    }
  }
  return (
    <div className='flex h-screen'>
      {/**Image Section */}
      <div className='w-full md:w-2/3 h-1/3 md:h-full flex flex-col  '>
          <img className='object-cover w-full h-full' src={BusPicture} />

      </div>
      {/**Login Section */}
      <div className='relative bg-gray-100 p-6 w-full md:w-1/3 h-1/3 md:h-full flex flex-col justify-center items-center'>
          <h2 className="text-blue font-semibold mb-12 text-2xl -mt-32 ml-12">Login Form</h2>
          <form onSubmit={handleLogin} className="flex flex-col w-full max-w-xs mt-20">
            <label className="mb-2">Email: </label>
            <input className="mb-4 p-2 border border-gray-300 rounded"  placeholder='example@gmail.com'value={email} onChange={(e) => setEmail(e.target.value)} type='email'></input>
            <label className="mb-2 " > Password: </label>
            <div className='flex'>

              
              <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded" value={password}></input>
              <span class="flex justify-around items-center" onClick={handleToggle}>
                <Icon class="absolute mr-10" icon={icon} size={25}/>
              </span>
            </div>
            
            <button type='submit'  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
          </form>
      </div>
      
    </div>
  )
}
export default Login;