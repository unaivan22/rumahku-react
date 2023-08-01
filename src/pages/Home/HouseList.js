import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../utils/Navbar';

import Web from '../Frame/Web';

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [activeFilter, setActiveFilter] = useState(''); //set filter by price
  const [activeTab, setActiveTab] = useState(0); //set tab ative
  const [sortingOrder, setSortingOrder] = useState('asc'); //set sorting

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

  const handleTabClick = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const handleTabBtnClick = (index) => {
    setActiveTab(index);
  };

  const filteredData = houses.filter(house => {
    if (activeFilter === '>1') {
      return house.price > 1;
    }
    else if (activeFilter === '<200000000') {
      return house.price < 200000000;
    } else if (activeFilter === '<400000000') {
      return house.price < 400000000;
    } else if (activeFilter === '>500000000') {
      return house.price > 500000000;
    } else {
      // No active filter, return all data
      return <div>ga ada data</div>;
    }
  });

  const sortData = (order) => {
    setSortingOrder(order);
  };

  const sortedData = [...filteredData].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    if (sortingOrder === 'asc') {
      return priceA - priceB;
    } else if (sortingOrder === 'desc') {
      return priceB - priceA;
    } else {
      // No sorting order, maintain the original order
      return 0;
    }
  });

  return (
    <Web>
      <Navbar />

        <div className='flex flex-row justify-between items-center lg:flex-row gap-y-4 xs:w-full xs:flex-col mt-8 container'>
          <div className='flex flex-row gap-x-3'>
            <button
              className={`px-4 py-2 ${
                activeTab === 0 ? 'bg-zinc-900 text-white rounded-xl xl:text-md xs:text-sm' : 'bg-zinc-100 text-zinc-500 rounded-xl xl:text-md xs:text-sm'
              }`}
              onClick={() => handleTabBtnClick(0) + handleTabClick('>1')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 1 ? 'bg-zinc-900 text-white rounded-xl xl:text-md xs:text-sm' : 'bg-zinc-100 text-zinc-500 rounded-xl xl:text-md xs:text-sm'
              }`}
              onClick={() => handleTabBtnClick(1) + handleTabClick('<200000000')}
            >
              Under 200 jt
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 2 ? 'bg-zinc-900 text-white rounded-xl xl:text-md xs:text-sm' : 'bg-zinc-100 text-zinc-500 rounded-xl xl:text-md xs:text-sm'
              }`}
              onClick={() => handleTabBtnClick(2) + handleTabClick('<400000000')}
            >
              Under 400 jt
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 3 ? 'bg-zinc-900 text-white rounded-xl xl:text-md xs:text-sm' : 'bg-zinc-100 text-zinc-500 rounded-xl xl:text-md xs:text-sm'
              }`}
              onClick={() => handleTabBtnClick(3) + handleTabClick('>500000000')}
            >
              Over 500 jt
            </button>
          </div>

          <select value={sortingOrder} onChange={(e) => sortData(e.target.value)} className="select select-bordered w-full xl:max-w-xs lg:max-w-xs sm:max-w-max">
            <option value="1" disabled >Sorting price</option>
            <option value="asc" onClick={() => setSortingOrder('asc')} >Cheapest to most expensive</option>
            <option value="desc" onClick={() => setSortingOrder('desc')} selected>Most expensive to cheapest</option>
          </select>

        </div>
        <div className='container'>
            {sortedData.length === 0 ? (
            <div className='grid h-screen place-items-center'>
              <p className='text-zinc-600 font-light'>No data matching the filter criteria.</p>
            </div>
            ) : (
              <div className='grid xl:grid-cols-4 gap-x-8 gap-y-12 my-8 '>
                {sortedData.map(house => (
                  <Link to={`/house/${house.id}`} key={house.id} className='space-y-2'>
                  <img className='aspect-square object-cover rounded-xl w-full' src={house.thumbnail} />
                  <div>
                      <h3 className='font-semibold text-lg'>{house.title}</h3>
                      <p className='font-light text-zinc-500'>Rp {house.price.toLocaleString('id-ID')}</p>
                  </div>
                </Link>
                ))}
              </div>
            )}
        </div>
    </Web>
    
  );
};

export default HouseList;
