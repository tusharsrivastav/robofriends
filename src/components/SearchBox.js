import React from 'react';
import '../components/SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className='searchbox'>
            <input 
                className='search-field'
                type='search'
                placeholder='Search'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;