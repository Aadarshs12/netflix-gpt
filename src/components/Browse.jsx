import React from 'react';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="flex w-full px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <div>
      <img
       className='sm:w-44 w-24 sm:ml-8'
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      </div>
      <div className="flex justify-end my-3 sm:my-4 text-xs sm:text-base">
        <img className='w-5 h-5 sm:w-8 sm:h-8 rounded-md' src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="sticker" />
        <button onClick={handleSignOut} className='font-bold text-white flex '>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Browse;
