import React, { useEffect, useState } from 'react';
import Web from '../Frame/Web';
import Navbarsub from '../utils/Navbarsub';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';

function Saved() {
  const [rumah, setRumah] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/rumahsubsidi.json');
      const json = await response.json();

      // Filter items where "saved" is true
      const filteredData = json.filter(rumahData => rumahData.saved === true);

      setRumah(filteredData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <Web>
        <Navbarsub />
        <div className='container mt-12 xl:mx-52 flex gap-x-2 items-center '>
            <Link to='/' className="w-14 h-14 rounded-full hover:cursor-pointer  bg-zinc-200 hover:bg-zinc-800 text-white text-center inline-flex items-center px-3 py-3  mr-2 mb-2">
                <IoMdArrowRoundBack size={32} />
            </Link>
            <h1 className='text-3xl font-bold text-zinc-800'>Saved</h1>
        </div>
        <div className='container my-12 space-y-12'>
            {rumah.map(rumahData => (
                <Link to={`/house/${rumahData.id}`} key={rumahData.id} className='flex items-center gap-x-8 justify-between xl:mx-32 '>
                    <div className='flex gap-x-8 items-center'>
                        <img className='aspect-square w-32 rounded-xl col-span-1 object-cover' src={rumahData.thumbnail} /> 
                        <div className='flex flex-col col-span-6'>
                            <div className='text-xl font-bold text-zinc-800'>
                                {rumahData.title}
                            </div>
                            <div className='text-md font-semibold text-zinc-800'>
                                Rp {rumahData.price.toLocaleString('id-ID')}
                            </div>
                            <div className='text-sm font-light text-zinc-800'>
                                {rumahData.kecamatan} {rumahData.kota}
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden xs:hidden xl:inline-block w-8 h-8 sm:hidden xs:hidden xl:inline-block rounded-full hover:cursor-pointer  bg-zinc-200 hover:bg-zinc-800 text-white text-center inline-flex items-center px-2 py-2  mr-2 mb-2">
                        <IoIosArrowForward size={16} />
                    </div>
                </Link>
            ))}
        </div>
    </Web>
  );
}

export default Saved;
