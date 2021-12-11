import {React} from 'react';

const SearchBox =({handleChange})=> {
  return(
    <div>
      <input onChange={(e)=>handleChange(e.target.value)} type="search" placeholder="search for monsters" />
    </div>
  )
};

export default SearchBox;