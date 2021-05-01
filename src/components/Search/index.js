import React from "react";
import './search.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search({ inputValue, handleOnChange, handleClick }) {


  return (
    <div class="container-fluid">
      <form class="search">
        <input
          type='text'
          id='name'
          name='name'
          value={inputValue}
          placeholder='Search by name ...'
          onChange={handleOnChange}
        />
        <button className='searchBtn' onClick={handleClick}>Search</button>
      </form>
    </div>
  );
}

export default Search;
