import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function ProfilHover() {
    const [data, setData] = useState([]);
    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/rumahsubsidi.json');
        const json = await response.json();

        // Filter items where "saved" is true
        const filteredData = json.filter(item => item.saved === true);

        setData(filteredData);
        setSavedCount(filteredData.length);
        } catch (error) {
        console.log('Error fetching data:', error);
        }
    };

  return (
    <div className="navbar- dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/25717454?v=4" />
            </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2">
            <li><Link to='/profile'>Profile</Link></li>
            <li>
                <Link to='/saved' className="justify-between">
                    Saved
                    <span className='badge py-3'>{savedCount} Houses</span>
                </Link>
            </li>
            <li><a>Settings</a></li>
            <li><Link to='/login'>Logout</Link></li>
        </ul>
    </div>
  )
}
