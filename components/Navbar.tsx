import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

//import useAuthStore from '../store/authStore';
import { IUser } from '../types';
import { createOrGetUser } from '../utils';
import Logo from '../assets visualart/logoColor.png';

const Navbar = () => {
  const user = false;
  //const { userProfile, addUser, removeUser } = useAuthStore();
  
  //useEffect(() => {
   // setUser(userProfile);
  //}, [userProfile]);



  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='logo'
            layout='responsive'
          />
        </div>
      </Link>

      <div className='relative hidden md:block'>
          SEARCH
      </div>
      <div>
        {user ? (
          <div> Logged in </div>
        ) : (
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response)}
              onError={() => console.log('Login Failed')}
            />
        )}
      </div>
    </div>
  );
};

export default Navbar;