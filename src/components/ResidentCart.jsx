import axios from 'axios'
import React, { useEffect, useState } from 'react'



    const residentsStatus = {
      Alive: "bg-green-500",
      Dead: " bg-red-500",
      unknown: "bg-grey-500"


    }

const ResidentCart = ({resident}) => {
      const [residentsInfo, setResidentsInfo] = useState()

    useEffect(() =>{
      axios.get(resident)
        .then((res) => setResidentsInfo(res.data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <article  className='border'>
      <div className=' relative'>
        <img src={residentsInfo?.image} alt="" />
          <div className=' absolute bottom-0 left-1/2'>
            <div></div>
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