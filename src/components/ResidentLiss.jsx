import React from 'react'
import ResidentCart from './ResidentCart'

const ResidentLiss = ({location}) => {
  const residents = location?.residents
  return (
    <section className=' border border-green-500 p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto'>
        {
          residents?.map((resident) => ( <ResidentCart key={resident} resident={resident} />))
        }
    </section>
  )
}

export default ResidentLiss