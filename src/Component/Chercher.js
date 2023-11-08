
import React from 'react'
import '../App.css'


function Chercher({onFilterChange}) {
  return (
    <div>
      <input className='chercher-input' type='text' onChange={(e)=>onFilterChange(e.target.value)} placeholder='chercher par title au rating'/>
    </div>
  );
};

export default Chercher;
