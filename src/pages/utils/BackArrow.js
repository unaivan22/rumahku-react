import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useHistory } from 'react-router-dom';

export default function BackArrow() {
  const history = useHistory();
  return (
    <div className='container mt-12'>
        <div className='grid grid-cols-1 gap-y-4'>
            <a onClick={() => history.push("/")} className="w-14 h-14 rounded-full hover:cursor-pointer  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
               <IoMdArrowRoundBack size={32} />
            </a>
        </div>
    </div>
  )
}