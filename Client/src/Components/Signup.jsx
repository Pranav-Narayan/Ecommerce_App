import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = () => {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    let formError;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Username validation
    if (!formData.name) {
      formError = "Name Required"
    }
    else if (formData.name.length < 3) {
      formError = "Username Must be alteast 3 Characters"
    }
    //Email validation
    else if (!formData.email) {
      formError = "Email Required"
    }
    else if (!emailRegex.test(formData.email)) {
      formError = "Please enter a valid email address"
    }
    //password validation
    else if (!formData.password) {
      formError = "Password Required"
    }
    else if (formData.password.length < 5) {
      formError = "Password must be at least 5 characters long"
    }
    return formError
  }

  const onSignup = async () => {
    try {
      const validateError = validateForm()
      if (validateError) {
        console.log("Error:", validateError)
        toast.error(validateError)
        return
      }
      setLoading(true)
      const response = await axios.post(
        'http://localhost:8000/api/auth/signup',
        formData)
      console.log("Account Created")
      setFormData({ name: "", email: "", password: "" })
      toast.success('Account Created, Check your mail to verify account')
      setLoading(false)

      setTimeout(() => {
        navigate('/login')
      }, 2000);

    } catch (error) {

      const errorResponse = error.response?.data.error
      console.log("Error response in backend ==", errorResponse)
      if (errorResponse) {
        toast.error(errorResponse)
        setLoading(false)
        return
      }
      toast.error("Something went wrong . Signup Failed")
      console.log("Error in Signup :", error)
    }
  }

  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-12 mb-20 flex flex-col gap-12 justify-center max-w-6xl xl:mx-auto'>
        <h1 className='text-center text-3xl uppercase font-bold tracking-[0.2em] text-gray-900'>Create Account</h1>
        <div className='flex justify-between gap-10 sm:gap-12 md:gap-16 lg:gap-24 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col gap-6 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100'>
            <h2 className='text-2xl font-semibold text-gray-800'>Signup</h2>
            <div className='flex flex-col gap-2'>
              <input name='name' value={formData.name} onChange={handleChange}
                type="text" placeholder='Name' className='w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block px-5 py-3.5 transition duration-200 outline-none' />
            </div>
            <div className='flex flex-col gap-2'>
              <input name='email' value={formData.email} onChange={handleChange}
                type="email" placeholder='Email' className='w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block px-5 py-3.5 transition duration-200 outline-none' />
            </div>
            <div className='flex flex-col gap-2 relative'>
              <input name='password' value={formData.password} onChange={handleChange}
                type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block px-5 py-3.5 transition duration-200 outline-none' />
              <div className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer text-gray-400 hover:text-orange-500 transition-colors p-2'
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye className='text-lg' /> : <FaEyeSlash className='text-lg' />}
              </div>
            </div>

            <div className='pt-2 relative'>
              <button
                className='w-full bg-gray-900 hover:bg-black text-white font-medium rounded-xl text-md px-8 py-3.5 text-center transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-4'
                onClick={onSignup}>
                {loading ?
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Creating Account...</span>
                  </>
                  :
                  'Signup'
                }
              </button>
            </div>

          </div>
          <div className='flex-1 flex flex-col items-start gap-6 bg-gray-50/50 p-6 sm:p-10 rounded-3xl border border-gray-100 justify-center h-fit'>
            <h2 className='text-2xl font-semibold text-gray-800'>Already Have Account</h2>
            <p className='text-gray-500 leading-relaxed max-w-md'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
            <Link to='/login' className='inline-flex justify-center items-center w-full sm:w-auto text-center border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-medium rounded-xl text-md px-10 py-3 transition-all duration-300'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup