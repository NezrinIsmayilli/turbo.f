import React from 'react'
import Box from './Box'
import kapital from "../img/kapital.png"


const Cars = ({cars, title, category}) => {
  return (
    <div className='container'>
         <div className='cars'>
            <div className='title'>
                <h1>{title}</h1>
                <img src={kapital} alt="err"/>
            </div> 
            {cars ? (
                <div className="row">
                    {cars.map(car => (
                        <Box key={car.id} cars={car} category={category}/>
                    ))}
                </div>
            ) : (
                <div className="loading">
                    Loading...
                </div>
            )}
        </div> 
    </div>
  )
}

export default Cars