import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Web from '../Frame/Web';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/rumahsubsidi.json');
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Web>
        <div className='grid xl:grid-cols-4 gap-x-8 gap-y-12 my-4 container'>
            {houses.map((house) => (
                <Link to={`/house/${house.id}`} key={house.id} className='space-y-2'>
                    <img className='aspect-square object-cover rounded-xl' src={house.thumbnail} />
                    <div>
                        <h3 className='font-semibold text-lg'>{house.title}</h3>
                        <p className='font-light text-zinc-500'>Rp {house.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    </Web>
    
  );
};

export default HouseList;
