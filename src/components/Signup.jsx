import { useState } from 'react'
import { FaUser, FaLock, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Signin = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className={`z-[2] flex flex-col items-center justify-center px-8 md:px-20 py-6 transition-all duration-200 delay-200 overflow-hidden cols-start-1 col-end-2 row-start-1 row-end-2  
                       `}
        >
            <h1 className='text-4xl font-bold text-gray-700 mb-6 text-center'>Sign Up</h1>
            
            {/* Username Input */}
            <div className='max-w-[380px] w-full bg-gray-100 my-3 h-[55px] rounded-full flex items-center p-4'>
                <FaUser className='text-gray-400 text-lg mr-3'/>
                <input
                    type='text'
                    name="username"
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className='bg-transparent outline-none border-none w-full font-semibold text-gray-700'
                />
            </div>

            {/* Email Input */}
            <div className='max-w-[380px] w-full bg-gray-100 my-3 h-[55px] rounded-full flex items-center p-4'>
                <FaLock className='text-gray-400 text-lg mr-3'/>
                <input
                    type='email'
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='bg-transparent outline-none border-none w-full font-semibold text-gray-700'
                />
            </div> 

            {/* Password Input */}
            <div className='max-w-[380px] w-full bg-gray-100 my-3 h-[55px] rounded-full flex items-center p-4'>
                <FaLock className='text-gray-400 text-lg mr-3'/>
                <input
                    type='password'
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className='bg-transparent outline-none border-none w-full font-semibold text-gray-700'
                />
            </div>
            
            {/* Submit Button */}
            <button 
                type='submit'
                className='w-[150px] bg-blue-500 border-none outline-none h-[49px] rounded-full text-white uppercase font-semibold my-3 cursor-pointer hover:bg-blue-600 transition'
            >
                Sign up
            </button>
            
            {/* Social Login Section */}
            <div className='mt-6 max-w-[380px] w-full'>
                <p className='text-base py-2 text-center'>
                    Or Sign Up with
                </p>
                <div className='flex justify-center gap-4'>
                    <a href='#' 
                         className='h-[46px] w-[46px] flex justify-center items-center mx-[0.45rem] text-gray-700 rounded-full border border-gray-700 no-underline text-lg transition-all duration-300 hover:text-blue-500 hover:border-blue-500 '>
                        <FaFacebookF/>
                    </a>
                    <a href='#' 
                         className='h-[46px] w-[46px] flex justify-center items-center mx-[0.45rem] text-gray-700 rounded-full border border-gray-700 no-underline text-lg transition-all duration-300 hover:text-blue-500 hover:border-blue-500 '>
                        <FaTwitter/>
                    </a>
                    <a href='#' 
                         className='h-[46px] w-[46px] flex justify-center items-center mx-[0.45rem] text-gray-700 rounded-full border border-gray-700 no-underline text-lg transition-all duration-300 hover:text-blue-500 hover:border-blue-500 '>
                        <FaGoogle/>
                    </a>
                    <a href='#' 
                         className='h-[46px] w-[46px] flex justify-center items-center mx-[0.45rem] text-gray-700 rounded-full border border-gray-700 no-underline text-lg transition-all duration-300 hover:text-blue-500 hover:border-blue-500 '>
                        <FaLinkedinIn/>
                    </a>
                </div>
            </div>
        </form>
    )
}

export default Signin