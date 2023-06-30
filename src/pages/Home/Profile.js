import React from 'react'
import Web from '../Frame/Web'
import NavbarClear from '../utils/NavbarClear'

export default function Profile() {
  return (
    <Web>
        <NavbarClear />
        <div className='grid h-screen place-items-center'>
            <div className='text-center space-y-4'>
                <img className='aspect-square rounded-full' src="https://avatars.githubusercontent.com/u/25717454?v=4" />
                <p className='text-zinc-700 font-light text-lg'>Unaivan</p>
            </div>
        </div>
    </Web>
  )
}
