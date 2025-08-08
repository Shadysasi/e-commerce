import { useState } from 'react';
import axios from 'axios';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import LoginImg from '../assets/log.svg';
import registerImg from "../assets/register.svg";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const AuthPages = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const navigate = useNavigate();
  const {login} = useAuthStore()

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  // Handle registration
  const handleRegister = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      const { token, user } = response.data;
      
      // zustand to handle login
      login(token,user)
      
      navigate('/auth');
      alert('Registration successful! Please login.');
    } catch (err) {
      window.alert(err.response?.data?.message || 'Registration failed');
    }
  };

  // Handle login
  const handleLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token,user } = response.data;
      
      // zustand to handle login
      login(token,user)

      // Redirect to home page
      navigate('/');
    } catch (err) {
      window.alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">

      {/* Background Gradient Circle - Mobile First */}
      <div className={`
        absolute h-[1000px] w-[1000px] -bottom-[20%] right-[50%] rounded-full 
        bg-gradient-to-br from-blue-500 to-cyan-500 transition-all duration-[1.8s] 
        ease-in-out z-0 transform
        ${isSignUpMode ? 'translate-x-full md:right-[52%]' : ''}
        md:h-[1500px] md:w-[1500px] md:-bottom-[25%]
        lg:h-[2000px] lg:w-[2000px] lg:-bottom-[30%]
      `}></div>

      {/* Forms Container */}
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center px-4">
        <div className={`
          relative w-full max-w-md transition-all duration-1000 ease-in-out 
          delay-[700ms] z-[5] md:absolute md:top-1/2 md:left-3/4 md:-translate-x-1/2 
          md:-translate-y-1/2 md:w-1/2 lg:max-w-none
          ${isSignUpMode ? 'md:left-[25%]' : ''}
        `}>
          {isSignUpMode ? 
            <Signup onSubmit={handleRegister} /> : 
            <Signin onSubmit={handleLogin} />
          }
        </div>
      </div>

      {/* Rest of your component remains the same */}
      {/* Panels Container */}
      <div className="absolute h-full w-full top-0 left-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel */}
        <div className={`
          flex flex-col items-center justify-center text-center z-[6] p-8
          md:items-end md:justify-around md:pt-[3rem] md:pr-[17%] md:pb-[2rem] md:pl-[12%]
          ${isSignUpMode ? 'pointer-events-none hidden md:flex' : 'pointer-events-auto'}
        `}>
          <div className={`
            text-white transition-transform duration-[0.9s] ease-in-out delay-[0.6s]
            mb-8 md:mb-0
            ${isSignUpMode ? 'md:-translate-x-[800px]' : ''}
          `}>
            <h3 className="font-semibold leading-none text-xl md:text-[1.5rem]">New here?</h3>
            <p className="text-sm py-4 md:py-[0.7rem] md:text-[0.95rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
            </p>
            <button
              onClick={toggleMode}
              className="m-0 bg-transparent border-2 border-white w-[130px] h-[41px] font-semibold text-sm md:text-[0.8rem]"
            >
              Sign up
            </button>
          </div>
          <img
            src={LoginImg}
            alt="Login Image"
            className={`
              w-3/4 max-w-xs transition-transform duration-[1.1s] ease-in-out delay-[0.4s]
              ${isSignUpMode ? 'md:-translate-x-[800px]' : ''}
            `}
          />
        </div>

        {/* Right Panel */}
        <div className={`
          flex flex-col items-center justify-center text-center z-[6] p-8
          md:items-start md:justify-around md:pt-[3rem] md:pr-[12%] md:pb-[2rem] md:pl-[17%]
          ${isSignUpMode ? 'pointer-events-auto' : 'pointer-events-none hidden md:flex'}
        `}>
          <div className={`
            text-white transition-transform duration-[0.9s] ease-in-out delay-[0.6s] 
            mb-8 md:mb-0
            ${isSignUpMode ? '' : 'md:translate-x-[800px]'}
          `}>
            <h3 className="font-semibold leading-none text-xl md:text-[1.5rem]">One of us?</h3>
            <p className="text-sm py-4 md:py-[0.7rem] md:text-[0.95rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
            </p>
            <button
              onClick={toggleMode}
              className="m-0 bg-transparent border-2 border-white w-[130px] h-[41px] font-semibold text-sm md:text-[0.8rem]"
            >
              Sign in
            </button>
          </div>
          <img
            src={registerImg}
            alt="Register Image"
            className={`
              w-3/4 max-w-xs transition-transform duration-[1.1s] ease-in-out delay-[0.4s] 
              ${isSignUpMode ? '' : 'md:translate-x-[800px]'}
            `}
          />
        </div>
      </div>

      {/* Mobile Toggle Button - Only visible on small screens */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-10 md:hidden">
        <button
          onClick={toggleMode}
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg font-semibold"
        >
          {isSignUpMode ? 'Already have an account? Sign In' : 'New user? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default AuthPages;