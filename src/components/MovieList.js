import React from 'react'

function MovieList({movies}) {
  
  return (
    
        <table className='moviesList'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
                {movies.map((item,index) => {
                    return(
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.genre}</td>
                            <td>{item.year}</td>
                        </tr>
                    )
                })}
            
        </tbody>
        
        

        </table>

    

  )
}

export default MovieList






