import { useState } from 'react'

import './SearchBar.css'

export default function SearchBar({searchHandler}) {
    const [searchValue, setSearchValue] = useState('')

    const onEnterDown = (e) => {
        if(e.key === 'Enter') {
            searchHandler(searchValue)
        }
    } 

    return(
        <div className='searchBar'>
            <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={onEnterDown} placeholder='Search by title'></input>
            <img src='/images/loupe.svg' onClick={() => searchHandler(searchValue)}></img>
        </div>
    )
}