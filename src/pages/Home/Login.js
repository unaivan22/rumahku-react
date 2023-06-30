import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='grid xl:grid-cols-2 sm:grid-cols-1'>
        <div className='p-4'>
            <img className='object-cover rounded-2xl aspect-square' src='https://images.unsplash.com/photo-1589318491232-0ee8552fb3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' />
        </div>
        <div className='grid place-items-center p-12'>
            <div className='space-y-8 text-center w-96'>
                <a className="pointer font-semibold text-4xl my-12"><span className='text-zinc-900'>Rumah</span><span className='text-rose-500'>ku</span></a>
                <div className='space-y-1'>
                    <h3 className='text-zinc-400 font-light text-left'>Username</h3>
                    <input
                        type="text"
                        // value={searchQuery}
                        // onChange={(event) => setSearchQuery(event.target.value)}
                        className="placeholder:text-md input input-bordered w-full h-12 rounded-xl" 
                        placeholder="Type your dream residence..." 
                    />
                </div>

                <div className='space-y-1'>
                    <h3 className='text-zinc-400 font-light text-left'>Password</h3>
                    <input
                        type="password"
                        // value={searchQuery}
                        // onChange={(event) => setSearchQuery(event.target.value)}
                        className="placeholder:text-md input input-bordered w-full h-12 rounded-xl" 
                        placeholder="Type your dream residence..." 
                    />
                </div>

                <div className='mt-24 w-90'>
                    <Link to='/' className='btn bg-zinc-700 hover:bg-zinc-900 pointer text-white rounded-xl px-6 py-4 w-full text-center'>
                    Login
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
