import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { FaCommentMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const active = 'text-lg font-bold px-6 p-y-3 rounded-md';
  const [mobile, setMobile] = useState(false);
  const inActive = 'text-lg font-bold px-6 p-y-3 hover:text-slate-900';
  return (
    <div>
      <header className=" mx-auto bg-blue-600 w-full border-b p-8 "  >
        <nav className='flex sticky items-center justify-between p-4 md:p-6 lg:px-8 ' style={{ height: '100px', width: '100%', zIndex: '60' }} >
{/*         <div>
          <a href='/' className='flex py-3 px-6 item-center gap-1 text-lg font-mono fonto-bold shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'>
          <div className="bg-yellow-400 p-2">
            <FaCommentMedical />
          </div>
          <div className="bg-blue-500 text-white p-2 font-bold">
             Medplus<sup>+</sup>
          </div>
       
          </a>
        </div> */}
          <Link to="/" className="flex items-center rounded-xl overflow-hidden mx-auto md:mx-0 shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3">
         {/* Left Section with SVG */}
         <div className="bg-yellow-400 p-2">
           <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 431.771 431.771" xml:space="preserve" stroke="#ffa500">
             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
             <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
             <g id="SVGRepo_iconCarrier">
               <g>
                 <g>
                   <path d="M332.314,239.837c2.292,6.147,8.154,10.219,14.711,10.219h69.044c8.664,0,15.701-7.029,15.701-15.701 c0-8.66-7.037-15.701-15.701-15.701h-58.144L326.647,134.7c-2.236-6.014-7.927-10.057-14.335-10.215 c-6.455-0.134-12.282,3.619-14.811,9.506l-28.236,65.866L232.733,63.702c-1.884-7.077-8.491-11.936-15.726-11.621 c-7.309,0.26-13.471,5.534-14.853,12.717l-43.703,226.947L127.473,169.25c-1.688-6.658-7.494-11.447-14.349-11.834 c-6.899-0.294-13.167,3.749-15.577,10.169l-22.506,60.018H15.699C7.025,227.603,0,234.631,0,243.304 c0,8.664,7.025,15.7,15.699,15.7h70.214c6.546,0,12.403-4.063,14.704-10.198l8.706-23.22l35.962,142.256 c1.773,6.993,8.057,11.862,15.214,11.862c0.156,0,0.307,0,0.463-0.008c7.356-0.217,13.573-5.507,14.966-12.728l44.15-229.239 l30.612,114.021c1.731,6.464,7.358,11.116,14.046,11.598c6.561,0.433,12.908-3.326,15.537-9.474l30.629-71.471L332.314,239.837z"></path>
                 </g>
               </g>
             </g>
           </svg>
         </div>
  
         {/* Right Section with Text */}
         <div className="bg-blue-500 text-white p-2 font-bold">
           Medplus<sup>+</sup>
         </div>
       </Link>
        <div className='flex md:hidden'>
          <button className='-m-2 5 p-2.5 text-gray-900  inline-flex justify-center rounded-md hover:text-green-400'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" onClick={()=>setMobile(true)}>
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>

          </button>
        </div>
        <div className='hidden md:flex md:space-x-8'>
          <ul className='flex space-x-8'>
            <li>
              <a href='/' className={`${location.pathname === '/' ? active : inActive} hover:border-b-2 border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className={`${location.pathname === '/about' ? active : inActive} hover:border-b-2  border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                About
              </a>
            </li>
            <li>
              <a href='/products'className={`${location.pathname === '/services' ? active : inActive} hover:border-b-2 border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                Services
              </a>
            </li>
            <li>
              <a href='/markets' className={`${location.pathname === '/social' ? active : inActive} hover:border-b-2 border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                Social & News
              </a>
            </li>
            <li>
              <a href='/dashboard' className={`${location.pathname === '/cases' ? active : inActive} hover:border-b-2 border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                Cases
              </a>
            </li>
             <li>
              <a href='/contact' className={`${location.pathname === '/blogs' ? active : inActive} hover:border-b-2 border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                Blogs
              </a>
            </li>
            <li>
              <a href='/contact' className={`${location.pathname === '/contact' ? active : inActive} hover:border-b-2 border-green-400 transition-all font-bold font-mono duration-300 ease-in-ou`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a href='/sign-in' className='hidden md:block items-center justify-center px-4 py-2 text-lg font-mono font-medium text-white bg-green-400 rounded-md hover:bg-green-500' outline>Login</a>

        </nav>
        <Dialog as='div' className={'md:hidden'} open={mobile} onClose={setMobile} styles={{marginTop: '150px'}}>
            <div className='fixed inset-0 z-50 bg-gray-50 bg-opacity-80'/>
            <Dialog.Panel className='fixed inset-y-0 right-0 z-50 overlay-y-auto bg-gray-50 bg-opacity-80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10' style={{paddingTop: '250px'}} styles={{marginTop: '250px'}}>
              <div className='flex justify-between'>
              
                <button className='-m-2 5 p-2.5 text-gray-900  inline-flex justify-center rounded-md hover:text-green-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" onClick={()=>setMobile(false)}>
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>


                    </button>
                </div>
                <div className='mt-6 flow-root'>
                   <div className='-my-2 divide-y divide-gray-500/50'>
                   <ul className='space-y-10'>
            <li>
              <a href='/' className={`${location.pathname === '/' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className={`${location.pathname === '/about' ? active : inActive} hover:border-b-2  border-green-400 transition-all duration-300 ease-in-ou`}>
                About
              </a>
            </li>
            <li>
              <a href='/products'className={`${location.pathname === '/services' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Services
              </a>
            </li>
            <li>
              <a href='/markets' className={`${location.pathname === '/socials' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Social & News
              </a>
            </li>
            <li>
              <a href='/dashboard' className={`${location.pathname === '/cases' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Cases
              </a>
            </li>
                     <li>
              <a href='/contact' className={`${location.pathname === '/blogs' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Blogs
              </a>
            </li>
            <li>
              <a href='/contact' className={`${location.pathname === '/contact' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Contact
              </a>
            </li>
          </ul>
          <div className='py-6'>
          <a href='/login' className='block w-full md:block items-center justify-center px-4 py-2 text-lg font-mono font-medium text-white bg-green-400 rounded-md hover:bg-green-500'>Login</a>
          </div>
                   </div>
                </div>
              

            </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

export default TopBar
