import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import Navbarsub from '../utils/Navbarsub';

import { TbViewportWide } from 'react-icons/tb';
import { BiBath } from 'react-icons/bi';
import { BiBed } from 'react-icons/bi';
import { BiCar } from 'react-icons/bi';
import { GrFavorite } from 'react-icons/gr';




import ZoomIn from '../utils/ZoomIn';


import Web from '../Frame/Web';


const HouseDetail = () => {
  const history = useHistory();
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
    return console.log('Loading...') 
    // <div>Loading...</div>;
  }

  const galleryImages = house.gallery.slice(0, 4);

  return (
    <Web>
      <Navbarsub />
      <ZoomIn>

      
        {/* <BackArrow /> */}
        
        <section className='container'>
          <div className='grid grid-cols-1 gap-x-8 mb-24'>

            <div className='flex flex-row items-center justify-between gap-x-4 my-12'>
              <div className='flex flex-row items-center gap-x-4'>
                <a onClick={() => history.goBack()} className="w-14 h-14 sm:hidden xs:hidden xl:inline-block rounded-full hover:cursor-pointer  bg-zinc-200 hover:bg-zinc-800 text-white text-center inline-flex items-center px-3 py-3  mr-2 mb-2">
                  <IoMdArrowRoundBack size={32} />
                </a>
                <h1 className='text-4xl font-bold text-zinc-900 xs:text-3xl'>{house.title}</h1>
              </div>
              <GrFavorite size="42px" color="red" />
            </div>

            <img className='aspect-video rounded-xl object-cover w-full xl:h-[500px] sm:aspect-square' src={house.thumbnail} />
            <div className='grid xl:grid-cols-9 sm:grid-cols-2 gap-x-12'>
              <div className='xl:col-span-6 sm:col-span-1'>
                <h3 className='text-4xl font-bold text-zinc-700 mt-6 xs:text-3xl'>Rp {house.price.toLocaleString('id-ID')}</h3>
                
                <div className='flex gap-x-2 mb-8'>
                  <p className='text-md font-light text-zinc-700'>{house.kecamatan},</p>
                  <p className='text-md font-light text-zinc-700'>{house.kota}</p>
                </div>

                <div>
                  <p className='text-zinc-600 font-light'>{house.description}</p>
                </div>

                <div className='flex justify-between mb-2 mt-8 items-center'>
                  <h1 className='font-bold text-zinc-900 text-xl'>Gallery</h1>
                  <a className='underline pointer' onClick={()=>window.allGallery.showModal()}>See All Gallery</a>
                </div>
                <div className='grid grid-cols-4 gap-x-4'>
                  {galleryImages.map((image, index) => (
                    <div key={index}>
                      <img className='rounded-xl aspect-square object-cover w-full' src={image} alt={`House ${index + 1}`} />
                    </div>
                  ))}
                </div >
              </div>

              <div className='xl:col-span-3 sm:col-span-1'>


                <div className="text-sm leading-6 mt-12">
                    <figure className=" flex flex-col-reverse bg-white border border-1 border-zinc-200 rounded-2xl p-6">
                        <blockquote className="mt-6 text-slate-600 space-y-2">
                            <p className='font-light'>Interested in this house? Let's contact the seller.</p>
                            <a className="bg-zinc-800 hover:bg-zinc-900 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 w-full flex items-center justify-center sm:w-auto"href="/">Call {house.seller}</a>
                        </blockquote>
                        <div className='bg-zinc-50 flex justify-between items-center rounded-full px-6 py-1 my-6'>
                          <div className='p-2 flex gap-x-1'>
                            <BiBed size="20px" color="gray" />
                            <h5 className='text-zinc-900 font-light'>{house.bedroom}</h5>
                          </div>
                          <div className='p-2 flex gap-x-1'>
                            <BiBath size="20px" color="gray" />
                            <h5 className='text-zinc-900 font-light'>{house.bathroom}</h5>
                          </div>
                          <div className='p-2 flex gap-x-1'>
                            <BiCar size="20px" color="gray" />
                            <h5 className='text-zinc-900 font-light'>{house.carport}</h5>
                          </div>
                          <div className='p-2 flex gap-x-1'>
                            <TbViewportWide size="20px" color="gray" />
                            <h5 className='text-zinc-900 font-light'>{house.wide} x {house.long}</h5>
                          </div>
                        </div>
                        
                        <figcaption className="flex items-center space-x-4"><img src={house.photoseller} alt=""
                                className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                            <div className="flex-auto">
                                <div className="text-base text-zinc-900 font-semibold">{house.seller}</div>
                                <div className="mt-0.5 capitalize">{house.kota}</div>
                            </div>
                        </figcaption>
                        
                    </figure>
                </div>


              </div>
            
            </div>
          </div>
        </section>
      </ZoomIn>

      <dialog id="allGallery" className="modal">
        <form method="dialog" className="modal-box gallery">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-normal text-lg mb-4">All Gallery</h3>

          <div className='columns-2 gap-4 space-y-4'>
              {galleryImages.map((image, index) => (
                <div key={index}>
                  <img className='rounded-xl object-cover w-full' src={image} alt={`House ${index + 1}`} />
                </div>
              ))}
            </div >
        
        </form>
      </dialog>

    </Web>
  );
};

export default HouseDetail;
