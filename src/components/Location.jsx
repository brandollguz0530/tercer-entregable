import React from 'react'

const Location = ({location}) => {
    
  return (
    <div className=' mt-[-300px]'>
    <section className=' text-center text-white'>
        <h2>{location?.name}</h2>
        <ul>
            <li>Type: {location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {location?.residents.length}</li>
        </ul>
    </section>
    </div>

    
  )
}

export default Location