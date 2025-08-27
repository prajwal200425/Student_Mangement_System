import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { toast, ToastContainer, Bounce } from 'react-toastify'

const AllStudRecord = () => {

  const [student, setStudent] = useState([]);

  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchStud = async () => {
      const res = await axios.get("http://localhost:3000/student/all-records", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res.data)
      setStudent(res.data.getStudents);
    }

    fetchStud();
  }, [])

  const deleteStudent = async (id) => {
    try {

      await axios.delete(`http://localhost:3000/student/delete/${id}`, {
        headers: {

          Authorization: `Bearer ${token}`
        }
      })

      setStudent((prev) => prev.filter((stud) => stud._id !== id));

      toast.success('Delete Student Succesfully', {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce
      })

    } catch (error) {
      toast.error(error.response?.data.message || "Something went wrong", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce
      })
    }
  }


  return (
    <>
      <ToastContainer />
      <div className='p-6 bg-white shadow-lg   rounded-lg mt-5'>
        <div className='flex items-center justify-center m-4 mt-2'>
          <h2 className='text-xl font-bold'>Student Records</h2>
        </div>
      </div>


      <div className='overflow-x auto ml-10 mr-10 mt-5'>
        <table className='min-w-full table-auto border border-gray-200'>
          <thead className='bg-gray-100 text-gray-700'>
            <tr >
              <th className='px-4 py-3 border'>Sr. No</th>
              <th className='px-4 py-3 border'> Name</th>
              <th className='px-4 py-3 border'>Age</th>
              <th className='px-4 py-3 border'>Address</th>
              <th className='px-4 py-3 border'>Contact</th>
              <th className='px-4 py-3 border'>Email</th>
              <th className='px-4 py-3 border'>Department</th>
              <th className='px-4 py-3 border'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              student.map((data, idx) => {
                return (
                  <tr key={data._id}>
                    <td className='px-4 py-2 border'>{idx + 1}</td>
                    <td className='px-4 py-2 border'>{data.fullName}</td>
                    <td className='px-4 py-2 border'>{data.age}</td>
                    <td className='px-4 py-2 border'>{data.address}</td>
                    <td className='px-4 py-2 border'>{data.contact}
                    </td>
                    <td className='px-4 py-2 border'>{data.email}</td>
                    <td className='px-4 py-2 border'>{data.department}</td>
                    <td className='px-4 py-2 border space-x-2'>
                      <Link to={`/update/${data._id}`} className='inline-block px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600'>Update</Link>


                      <button
                        onClick={() => deleteStudent(data._id)}
                        className='inline-block px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default AllStudRecord
