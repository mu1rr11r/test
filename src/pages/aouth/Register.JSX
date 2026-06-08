import React, { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast' 
import { useNavigate } from 'react-router-dom'
import { AouthContext } from '../../context/AoutContext'
import { registerSchema } from '../../Schema/Schema.register'

const API_URL = "https://ecommerce.routemisr.com/api/v1/auth/signup"


export default function Register() {
  const [successMessage, setSuccessMessage] = useState('')
  const [apiError, setApiError] = useState('')
  const [isLoading, setIsLoading] = useState(false) 
  
  const navigate = useNavigate()
  const { token } = useContext(AouthContext)

  useEffect(() => {
    if (token) navigate('/')
  }, [token, navigate])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }, 
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange', 
  })



  async function onSubmit(data) {
    setIsLoading(true);
    try {
      const res = await axios.request({
        method: "POST",
        url: API_URL,
        data: data,
      });

      if (res.error) {
        throw new Error(res.error);
      } else {
        toast.success('تم التسجيل بنجاح! جاري تحويلك لصفحة تسجيل الدخول...');
        setSuccessMessage('تم التسجيل بنجاح! جاري تحويلك لصفحة تسجيل الدخول...');
        setApiError('');
        reset(); 

        setTimeout(() => {
          // navigate to lowercase path to match routes
          navigate('/login')
        }, 2000);
      }

    } catch (error) {
      console.log(error.response?.data);
      const errMsg = error.response?.data?.message || 'حدث خطأ ما أثناء التسجيل';
      
      toast.error(errMsg);
      setApiError(errMsg);
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-5">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-3xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register('name')}
              className="w-full p-4 rounded-xl bg-gray-100 outline-none"
            />
            {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
          </div>

        

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className="w-full p-4 rounded-xl bg-gray-100 outline-none"
            />
            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
          </div>

         

            {/* Phone */}
            <div>
              <input
                type="text"
                placeholder="Phone"
                {...register('phone')}
                className="w-full p-4 rounded-xl bg-gray-100 outline-none"
              />
              {errors.phone && <p className="text-red-500 mt-2">{errors.phone.message}</p>}
            </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className="w-full p-4 rounded-xl bg-gray-100 outline-none"
            />
            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('rePassword')}
              className="w-full p-4 rounded-xl bg-gray-100 outline-none"
            />
            {errors.rePassword && <p className="text-red-500 mt-2">{errors.rePassword.message}</p>}
          </div>

          {/* زر التسجيل المعدل */}
          <button
            disabled={!isValid || isLoading} // 3. الزرار هيكون ديسيبول لو الفورم مش صحيحة أو لو فيه لودينج شغّال
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'جاري التسجيل...' : 'Register'}
          </button>

          {/* الـ Alert المدمج */}
          <div className="mt-4">
            {successMessage && (
              <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl text-center animate-fade-in">
                {successMessage}
              </div>
            )}

            {apiError && (
              <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl text-center animate-fade-in">
                {apiError}
              </div>
            )}
          </div>

        </form>
      </div>
    </div>
  )
}