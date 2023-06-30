import { useHistory } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import EaseIn from './EaseIn';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [submitted, setSubmitted] = useState(false);
  
  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/rumahsubsidi.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.log('Error:', error));
  };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const filterData = () => {
        if (data.length === 0) {
          return [];
        }
        
        return data.filter(item => {
          if (item.title) {
            return item.title.toLowerCase().includes(searchQuery.toLowerCase());
          }
          return false;
        });
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    };
  
    return (
      <EaseIn>
        <section className='container'>
            <div className='mt-16'>
                <a onClick={() => history.goBack()} className='pointer h-max-fit'>
                    <AiOutlineCloseCircle size='32px' />
                </a>
                <h1 className='text-4xl my-6'>Search</h1>
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="placeholder:text-lg input input-bordered w-full h-12 rounded-full" 
                        placeholder="Type your dream residence..." 
                    />
                </form>
            </div>
            
            {submitted && (
            <div className='grid xl:grid-cols-4 gap-x-8 gap-y-12 my-8 '>
                {filterData().map((item) => (
                <Link to={`/house/${item.id}`} key={item.id} className='space-y-2'>
                    <img className='aspect-square object-cover rounded-xl' src={item.thumbnail} />
                    <div>
                        <h3 className='font-semibold text-lg'>{item.title}</h3>
                        <p className='font-light text-zinc-500'>Rp {item.price.toLocaleString('id-ID')}</p>
                    </div>
                </Link>
                ))}
            </div>
            )}
        </section>
      
      </EaseIn>
    );
  };

  export default Search;
