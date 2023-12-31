import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import ProfilHover from './ProfilHover';

export default function Navbarsub() {
    const history = useHistory();

  return (
    <div className="navbar sticky top-0 bg-base-100 py-4 border-b border-zinc-100">
        <div className='container flex justify-between'>
            <div className="navbar-">
                <Link to='/' className="pointer sm:hidden xs:hidden xl:block font-semibold text-xl"><span>Rumah</span><span className='text-rose-500'>ku</span></Link>
                <div className="xl:hidden lg:hidden flex flex-col gap-y-2">
                    <div className='flex flex-row items-center gap-x-2'>
                        <a onClick={() => history.goBack()} className="xl:hidden lg:hidden text-xinc-700 pointer">
                            <IoIosArrowBack size={18} />
                        </a>
                        <Link to='/search'>
                            <input type="text" placeholder="Search dream residence..." className="placeholder:text-sm input input-bordered w-full h-10 rounded-full" />
                        </Link>
                    </div>
                    <div className='flex items-start justify-start flex-row gap-x-1'>
                        <HiLocationMarker size="16px" color="coral" />
                        <p className='text-xs text-zinc-500'>Keputih, Surabaya, East Java</p>
                    </div>
                </div>
            </div>
            <div className="navbar- hidden w-80 lg:flex flex flex-col gap-y-2">
                <Link to="/search">
                    <input type="text" placeholder="Search dream residence..." className="input input-bordered w-full h-12 rounded-full" />
                </Link>
                <div className='flex items-center justify-center flex-row gap-x-1'>
                    <HiLocationMarker size="16px" color="coral" />
                    <p className='text-xs text-zinc-500'>Keputih, Surabaya, East Java</p>
                </div>
            </div>
            <ProfilHover />
        </div>
    </div>
  )
}
