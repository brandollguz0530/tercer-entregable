import React from 'react'
import ResidentCart from './ResidentCart'

const ResidentLiss = ({location}) => {
  const residents = location?.residents
  return (
    <section>
        {
          residents?.map((resident) => ( <ResidentCart key={resident} resident={resident} />))
        }
    </section>
  )
}

export default ResidentLiss