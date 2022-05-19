import React, {useState} from 'react'
import Results from './Results';
import './Search.css';

const Search = () => {

    const [search, setSearch] = useState('');
    const [results, setResult] = useState('')

    const handleSearch = async e => e.preventDefault();

    const fetchData = () => {
            const error = "File was not found! error 404"
            const url = `https://api.bing.microsoft.com/v7.0/custom/search?q=${search}&customconfig=e3d83c07-a409-4683-a80b-fe0e5e4d04d7&mkt=en-NZ&setLang=EN`;
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "d81be53494ed44f2a7707437a6b3f308");

            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        const res = JSON.parse(xhr.responseText);
                        console.log(res);
                        setResult(res);
                    }
                }
                if (xhr.status === 404) {
                    console.log(error)
                }
            }
        xhr.send();
    };

    




  return (
    <>
        <div className='search'>
            <form onSubmit={handleSearch}> 
               <input onChange={(e) => {
                setSearch(e.target.value);
            }} type="search" value={search} placeholder= 'Search Turners...'/>
                <button onClick={fetchData} className= 'search-button'><b>SEARCH</b></button>
            </form>
        </div>
        <div className='data-output'>
          <Results results={results}/>
        </div>
    </>
  )
}

export default Search