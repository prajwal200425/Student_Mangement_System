import React, { useState } from 'react'
import axios from "axios"
import { toast, ToastContainer, Bounce } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const [User, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const { username, email, password } = User;
  const navigate = useNavigate()

  const HandleInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    

      await axios.post(`http://localhost:3000/user/register` , User)
     .then((res) =>{
      console.log(res.data)
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("user",JSON.stringify(res.data.user))

      toast.success("Acoount Created Succesfully", {
        position: "top-right",
        transition: Bounce,
        autoClose: 2000
     })

     setTimeout(()=>{
      navigate("/")
     },2000);

     })
     .catch((err)=>{
      console.log(err);
      const errMess = err.response?.data?.message;
       toast.error(errMess,"Something went wrong", {
        position: "top-right",
        transition: Bounce,
        autoClose: 2000
     })
      
    })
  }

  return (
    <>
    <ToastContainer/>
      <div className='max-w-xl mx-auto mt-10 p-8 rounded-lg shadow'>
        <h2 className='text-2xl font-bold mb-6 text-center '>Register Here</h2>
        <form onSubmit={handleSubmit}>


          <div >
            <label className='block text-sm font-medium mb-1'>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={HandleInputChange}
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div >
            <label className='block text-sm font-medium mb-1'>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={HandleInputChange}
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <label className='block text-sm font-medium mb-1'>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={HandleInputChange}

            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <div className='text-center mt-5 w-full'>
            <button className='bg-blue-600 text-white py-2 px-6 rounded ' type='submit'>
              Register
            </button>
            <div>Already have an Account ? <Link to={'/login'}>Login</Link> </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default Register
