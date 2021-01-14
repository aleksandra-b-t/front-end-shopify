import React from 'react'

const SearchBox = (props) => {
    return (
        <div>
            <input className='search-box' 
            value={props.value} 
            onChange={(e)=> props.setSearchValue(e.target.value)}
            placeholder='Type to search for movie...'></input>
        </div>
    )
}
export default SearchBox;