import React from 'react'
import './Search.css'

function Search(props) {
  const { count, setCount } = props
  return (

      <div className='search'>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
        <input type="text" placeholder='Search' />
      </div>

  )
}

export default Search