'use client';
import React, { useEffect, useState } from 'react'
import NavItems from './NavItems';
import Image from 'next/image';
import Dropdown from '../Dropdown/Dropdown';
import AuthForm from '../Form/AuthForm';

interface NavBarProps {
  logo: string;
}

export default function NavBar({logo}: NavBarProps) {

  const [active, setActive] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [scrolled, setScrolled] = useState(false);  

  const dropdownItems = ["Arabic", "English"];

  const navItems = [
    {
      path: "/",
      name:"home",
    },
    {
      path: "/about",
      name:"about us",
    },
    {
      path: "#packages",
      name:"Tour Packages",
    },
    {
      path: "#contact",
      name:"contact us",
    },
  ]
  const signInFields = [
    { name: 'email', type: 'email', placeholder: 'Enter your email address', label: 'Email Address' },
    { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password' }
  ]
  const addContentSignIn = {
    text: "Don't have an account?",
    linkText: "Sign Up",
    onClick: () => {
      setIsLogin(!isLogin);
    }
  }
  const addContentSignUp = {
    text: "Already have an account?",
    linkText: "Log In",
    onClick: () => {
      setIsLogin(!isLogin);
    }
  }
  const signUpFields =[
    { name: 'name', type: 'text', placeholder: 'Enter your name and surname', label: 'Name and Surname' },
    { name: 'email', type: 'email', placeholder: 'Enter your email address', label: 'Email Address' },
    { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password' }
]
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

 const showPopup = (isLoginMode: boolean) => {
  setIsLogin(isLoginMode);
  setIsOpen(true);
};

 const closePopup = () => {
  setIsOpen(false);
};

  return (
    <div className='4xl:container mx-auto'>
    <nav className={`px-10 mylg:px-40 3xl:px-63 py-2 xl:py-5 flex justify-between items-center 
    fixed top-0 w-full z-40  4xl:container 
     ${scrolled ? 'bg-[#FECEA3] text-mygray shadow-md shadow-gray-500/20' : 'bg-mywhite text-white'}`}>
        <Image
          src={logo} 
          alt='logo' width={133} height={130} className='h-20 w-20 lg:h-28 lg:w-28 scale-75 md:scale-90 xl:scale-100'/>
        <div className='hidden lg:flex justify-between items-center'>
          <NavItems items={navItems}  />
        </div>
        <div className=' justify-between items-center gap-3 hidden lg:flex'>
          <Dropdown title="Eng" items={dropdownItems} />
          <button onClick={(e) => { e.preventDefault(); showPopup(true) }}>Login</button>
          <button  onClick={() => showPopup(false)}
          className='w-[168px] flex items-center justify-center bg-myprimary text-white py-3.5 px-6 rounded-full' >
          Sign Up
          </button>
        </div>
          {isOpen && (
            <>
              <div className="overlay fixed top-0 left-0 w-full h-full bg-mygray bg-opacity-80 z-10 "  onClick={closePopup}></div>
              <div className="pop-up fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[25%] z-20">
                  {isLogin ? (
                    <AuthForm
                      title="Login"
                      fields={signInFields}
                      buttonText="Sign In"
                      btnGoogleText='Sign In with Google'
                      additionalContent={addContentSignIn}
                      isSignUp={false}
                    />
                  ) : (
                    <AuthForm
                      title="Create Account"
                      fields={signUpFields}
                      buttonText="Sign Up"
                      btnGoogleText='Sign Up with Google'
                      additionalContent={addContentSignUp}
                      isSignUp={true}
                    />
                  )}
              </div>
            </>
          )}
         
        <button className='lg:hidden'
        onClick={() => setActive(prev => !prev)}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
          className='h-9 w-9'>
            <g clipPath="url(#clip0_1342_1605)">
            <path d="M26.7333 14.667H5.26667C4.56711 14.667 4 15.2341 4 15.9337V16.067C4 16.7666 4.56711 17.3337 5.26667 17.3337H26.7333C27.4329 17.3337 28 16.7666 28 16.067V15.9337C28 15.2341 27.4329 14.667 26.7333 14.667Z" fill="#FA8B02"/>
            <path d="M26.7333 21.333H5.26667C4.56711 21.333 4 21.9001 4 22.5997V22.733C4 23.4326 4.56711 23.9997 5.26667 23.9997H26.7333C27.4329 23.9997 28 23.4326 28 22.733V22.5997C28 21.9001 27.4329 21.333 26.7333 21.333Z" fill="#FA8B02"/>
            <path d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z" fill="#FA8B02"/>
            </g>
            <defs>
            <clipPath id="clip0_1342_1605">
            <rect width="50" height="50" fill="#FA8B02"/>
            </clipPath>
            </defs>
            </svg>

        </button>
    </nav>
    <div className={`menu  bg-white lg:hidden  transition-all duration-75 p-5 
      ${active ? 'translate-x-0': '-translate-x-full'} fixed top-0 w-full h-screen z-40`}>
        <button onClick={() => setActive(false)}>
          <svg width="50" height="50" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_1685)">
            <path d="M12.9399 12.9199L17.7999 8.05991C17.9091 7.93238 17.9662 7.76833 17.9597 7.60054C17.9532 7.43276 17.8837 7.2736 17.7649 7.15487C17.6462 7.03614 17.4871 6.96659 17.3193 6.96011C17.1515 6.95362 16.9874 7.0107 16.8599 7.11991L11.9999 11.9799L7.1399 7.11325C7.01237 7.00403 6.84832 6.94696 6.68053 6.95344C6.51275 6.95992 6.35359 7.02947 6.23486 7.1482C6.11613 7.26693 6.04657 7.42609 6.04009 7.59388C6.03361 7.76166 6.09068 7.92571 6.1999 8.05325L11.0599 12.9199L6.19323 17.7799C6.12345 17.8397 6.06677 17.9132 6.02675 17.9959C5.98674 18.0786 5.96425 18.1687 5.9607 18.2605C5.95716 18.3524 5.97263 18.4439 6.00614 18.5295C6.03966 18.615 6.0905 18.6927 6.15547 18.7577C6.22044 18.8227 6.29814 18.8735 6.38369 18.907C6.46924 18.9405 6.56079 18.956 6.6526 18.9524C6.74442 18.9489 6.8345 18.9264 6.91721 18.8864C6.99992 18.8464 7.07347 18.7897 7.13323 18.7199L11.9999 13.8599L16.8599 18.7199C16.9874 18.8291 17.1515 18.8862 17.3193 18.8797C17.4871 18.8732 17.6462 18.8037 17.7649 18.685C17.8837 18.5662 17.9532 18.4071 17.9597 18.2393C17.9662 18.0715 17.9091 17.9074 17.7999 17.7799L12.9399 12.9199Z" fill="#FA8B02"/>
            </g>
            <defs>
            <clipPath id="clip0_2_1685">
            <rect width="50" height="50" fill="#FA8B02" transform="translate(0 0.919922)"/>
            </clipPath>
            </defs>
            </svg>
        </button>
        <div className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center '> 
        
        <NavItems items={navItems} show={setActive} />
            <div className='flex flex-col gap-10'>
              <button>Login</button>
              <button
              className='w-[168px] flex items-center justify-center bg-myprimary text-white py-3.5 px-6 rounded-full' >
              Sign Up
              </button>
          </div>
        </div>
     
    </div>
    </div>
  )
}
