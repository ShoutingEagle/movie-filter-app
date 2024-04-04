import React from 'react'



function GenreFilter({genres}) {
    
  return (
    <div className='genreFilter'>
        <span className='genreFilterText'>Filter by Genre</span>
        <span className='genreButtonContainer'>
            {genres.map((item,index) => {
               return ( 
               <button key={index} onClick={() => console.log('Filtering by', item)}>{item}</button>
                )               
            })}
        </span>
    </div>
  )
}

export default GenreFilter









  