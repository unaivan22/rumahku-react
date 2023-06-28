import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';


export default function Navbar() {
  return (
    <div className="navbar sticky top-0 bg-base-100 py-4 border-b border-zinc-100">
        <div className='container flex justify-between'>
            <div className="navbar-">
                <a href="/" className="sm:hidden xs:hidden xl:block font-semibold text-xl">Rumah</a>
                <div className="xl:hidden lg:hidden flex flex-col gap-y-2">
                    <input type="text" placeholder="Search dream residence..." className="input input-bordered w-full h-10 rounded-full" />
                    <div className='flex items-start justify-start flex-row gap-x-1'>
                        <HiLocationMarker size="16px" color="coral" />
                        <p className='text-xs text-zinc-500'>Keputih, Surabaya, East Java</p>
                    </div>
                </div>
            </div>
            <div className="navbar- hidden w-80 lg:flex flex flex-col gap-y-2">
                <input type="text" placeholder="Search dream residence..." className="input input-bordered w-full h-12 rounded-full" />
                <div className='flex items-center justify-center flex-row gap-x-1'>
                    <HiLocationMarker size="16px" color="coral" />
                    <p className='text-xs text-zinc-500'>Keputih, Surabaya, East Java</p>
                </div>
            </div>
            <div className="navbar- dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/25717454?v=4" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
