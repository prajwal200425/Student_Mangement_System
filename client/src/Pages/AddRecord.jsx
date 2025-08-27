import React, { useState } from 'react'
import axios from "axios"
import { toast, ToastContainer, Bounce } from 'react-toastify'

import {useNavigate} from "react-router-dom"
const AddRecord = () => {

  // const Student = {
  //   fullName: "",
  //   age: "",
  //   address: "",
  //   contact: "",
  //   email: "",
  //   department: ""

  // }



  const [data, setData] = useState({
    fullName: "",
    age: "",
    address: "",
    contact: "",
    email: "",
    department: ""
  });

  const navigate = useNavigate();
  const { fullName, age, address, contact, email, department } = data;

  const HandleInputChange = (e) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    }
    )
  }


  const token = localStorage.getItem("token")


  const handleSubmit = async (e) => {
    e.preventDefault()

    

    await axios.post("http://localhost:3000/student/add-stud", data,{headers:{
      Authorization:`Bearer ${token}`
    }}).then((res) => {
      console.log(res.data);
      toast.success("Record Added.", {
        transition: Bounce,
        autoClose: 2000,
        position: "top-right"
      })

      setData({
        fullName: "",
        age: "",
        address: "",
        contact: "",
        email: "",
        department: ""
      })

      setTimeout(()=>{
navigate("/records")
      },2000)

    }).catch((err) => {
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
    <div className='max-w-xl mx-auto mt-10 p-8 rounded-lg shadow'>
      <ToastContainer />
      <h2 className='text-2xl font-bold mb-6 text-center '>Add Student Record</h2>

      <form onSubmit={handleSubmit}>

        <div >
          <label className='block text-sm font-medium mb-1'>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={HandleInputChange}

            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <label className='block text-sm font-medium mb-1'>Age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={HandleInputChange}

          className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />





        <label className='block text-sm font-medium mb-1'>Address</label>
        <textarea

          name="address"
          value={address}
          onChange={HandleInputChange}

          className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        <label className='block text-sm font-medium mb-1'>Contact</label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={HandleInputChange}

          className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />


        <label className='block text-sm font-medium mb-1'>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={HandleInputChange}

          className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        <label className='block text-sm font-medium mb-1'>Department</label>
        <input
          type="text"
          name="department"
          value={department}
          onChange={HandleInputChange}

          className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        <div className='text-center mt-5'>
          <button className='bg-blue-600 text-white py-2 px-6 rounded ' type='submit'>
            Add Record
          </button>
        </div>

      </form >
    </div >
  )
}

export default AddRecord
