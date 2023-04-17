import axios from 'axios'
import React, { useEffect, useState } from 'react'




const ResidentCart = ({resident}) => {
      const [residentsInfo, setResidentsInfo] = useState()
    

    useEffect(() =>{
      axios.get(resident)
        .then((res) => setResidentsInfo(res.data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <article>
      <div className='relative'>
        <img className='w-full' src={residentsInfo?.image} alt="" />
          <div className=' bg-[#020A02CC] absolute bottom-4 left-1/2 -translate-x-1/2 text-white border border-green-500 px-7 p-1 flex gap-3 items-center rounded-sm'>
            {
              residentsInfo?.status === "Alive" ?
              <div className=' bg-green-600 w-3 h-3 rounded-full '></div> : 
              residentsInfo?.status === "Dead" ?
              <div className=' bg-red-600 w-3 h-3 rounded-full '></div> :
              <div className=' bg-gray-600 w-3 h-3 rounded-full '></div>
            }
            
            
            <span>{residentsInfo?.status}</span>
          </div>
      </div>
      <section>
        <h3>{residentsInfo?.name}</h3>
        <ul>
          <li>
            <span>Species</span>
            <span>{residentsInfo?.species}</span>
          </li>
          <li>
          <span>Origin</span>
            <span>{residentsInfo?.origin.name}</span>
          </li>
          <li>
          <span>Times appear</span>
            <span>{residentsInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
      
    </article>
  )
}

export default ResidentCart