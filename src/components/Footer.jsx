import { FaCcApplePay,FaCcPaypal,FaCcVisa,FaCcMastercard } from "react-icons/fa";
import energy from "../assets/energy.png"
import etsy from "../assets/etsy.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-5">
        <div className='bg-sky-200 py-6  flex flex-col justify-between items-center gap-6'>
            <p className='font-semibold text-lg text-center px-2'>Yes! Send me exclusive offers, unique gift ideas and personalised tips for shopping and selling on etsy</p>
            <form className='flex items-center flex-col gap-4 md:flex-row'>
                <input
                    placeholder='Enter your email'
                    required
                    type='text'
                    className='py-3 px-6 h-12 md:w-[300px] w-auto bg-white border border-gray-300 rounded-full focus:outline-blue-700 '
                />
                <button  type='button'
                    className='h-12 py-3 px-6 font-semibold bg-white hover:bg-blue-700 hover:text-white rounded-full'
                >Subscribe</button>
            </form>
        </div>
        <div className='bg-blue-400 py-6 flex md:flex-row flex-col justify-center items-center gap-6'>
            <img src={energy} alt='Energy image'
                className='h-10 fill-white'
            />
            <p className='font-semibold text-lg text-white text-center px-2'>Etsy is powered by 100% renewable electricity</p>
        </div>
        <div className='grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full '>
            <div className='col-span-full mb-10 lg:col-span-2 lg:mb-0'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <a href='#'
                    >
                        <img src={etsy} alt='etsy logo' className='h-12'/>
                    </a>
                    <p className='text-gray-500 lg:max-w-xs text-center'>Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                    <Link to='/contact'
                        className='h-9 py-2.5 px-5 w-fit text-xs bg-blue-500 hover:bg-blue-700 text-white rounded-full mx-auto transition-all duration-500 lg:mx-0'
                    >
                        Contact us
                    </Link>
                </div>
            </div>

            <div className="lg:mx-auto text-left ">
                <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                <ul className="text-sm  transition-all duration-500">
                    <li className="mb-6"><a href="#"  className="text-gray-600 whitespace-nowrap hover:text-gray-900">Home</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">About</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Pricing</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Features</a></li>
                </ul>
            </div>
            
            <div className="lg:mx-auto text-left ">
                <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                <ul className="text-sm  transition-all duration-500">
                    <li className="mb-6"><a href="#"  className="text-gray-600 hover:text-gray-900">Crafts of India</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 hover:text-gray-900">Dress Materials</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 hover:text-gray-900">Jewelry</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 hover:text-gray-900">Shop by Materials</a></li>                </ul>
            </div>
                
            <div className="lg:mx-auto text-left ">
                <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                <ul className="text-sm  transition-all duration-500">
                    <li className="mb-6"><a href="#"  className="text-gray-600 whitespace-nowrap hover:text-gray-900">FAQs</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Quick Start</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Documentation</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">User Guide</a></li>                </ul>
            </div>
                
            <div className="lg:mx-auto text-left ">
                <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                <ul className="text-sm  transition-all duration-500">
                    <li className="mb-6"><a href="#"  className="text-gray-600 whitespace-nowrap hover:text-gray-900">Customer Support</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">License</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Terms & Conditions</a></li>
                    <li className="mb-6"><a href="#"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-end items-center gap-4 px-6">
            <FaCcApplePay size={30}/>
            <FaCcPaypal size={30}/>
            <FaCcVisa size={30}/>
            <FaCcMastercard size={30}/>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6 border-t py-4">
            Etsy © 2025. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer