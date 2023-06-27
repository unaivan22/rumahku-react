import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MdOutlineBedroomParent } from 'react-icons/md';
import { TbViewportWide } from 'react-icons/tb';
import { CgArrowLongRightE } from 'react-icons/cg';

import BackArrow from '../utils/BackArrow';
import ZoomIn from '../utils/ZoomIn';


import Web from '../Frame/Web';
import { HiHome } from 'react-icons/hi';


const HouseDetail = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/rumahsubsidi.json');
        const data = await response.json();
        const selectedHouse = data.find((house) => house.id === parseInt(id));
        setHouse(selectedHouse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (house === null) {
    return <div>Loading...</div>;
  }

  return (
    <Web>
      <ZoomIn>

      
        <BackArrow />
        
        <section className='container mt-12'>
          <div className='flex items-center gap-x-8'>
            <img className='aspect-video rounded-xl object-cover w-6/12' src={house.thumbnail} />
            <div>
              <h1 className='text-4xl font-bold text-zinc-900'>{house.title}</h1>
              <h3 className='text-2xl font-base text-zinc-700'>Rp {house.price}</h3>
              <div className='flex gap-x-2'>
                <p className='text-md font-light text-zinc-700'>{house.kecamatan},</p>
                <p className='text-md font-light text-zinc-700'>{house.kota}</p>
              </div>
              <div className='grid grid-cols-3 gap-6 my-4'>
                <div className='p-8 border border-zinc-200 rounded-xl space-y-4'>
                  <MdOutlineBedroomParent size="32px" color="gray" />
                  <h5 className='text-zinc-700 font-light'>{house.bedroom} Bedroom</h5>
                </div>
                <div className='p-8 border border-zinc-200 rounded-xl space-y-4'>
                  <TbViewportWide size="32px" color="gray" />
                  <h5 className='text-zinc-700 font-light'>{house.wide} Meters</h5>
                </div>
                <div className='p-8 border border-zinc-200 rounded-xl space-y-4'>
                  <CgArrowLongRightE size="32px" color="gray" />
                  <h5 className='text-zinc-700 font-light'>{house.long} Meters</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ZoomIn>
    </Web>
  );
};

export default HouseDetail;
