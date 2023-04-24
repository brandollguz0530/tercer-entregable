import React, { useEffect, useState } from 'react'
import ResidentCart from './ResidentCart'

const ResidentLiss = ({location}) => {
  const [currenPage, setCurrenPage] = useState(1)
    
    const RESIDENTS_PER_PAGE = 20
    
    const arrayPages = []
    const quantityPages = Math.ceil(location?.residents.length  /  RESIDENTS_PER_PAGE)
    for (let i = 1; i <= quantityPages; i++){
      arrayPages.push(i)
    }
    
    const startCut = currenPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE 

    const endCut = currenPage * RESIDENTS_PER_PAGE

  const residents = location?.residents

  useEffect(() => {
      setCurrenPage(1)
  }, [location])
  return (
    <>
    <section className=' mt-[50px]  p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto'>
        {
          residents?.slice(startCut, endCut).map((resident) => ( <ResidentCart key={resident} resident={resident} />))
        }
    </section>

    <ul class="flex gap-4 justify-center py-4">
  {arrayPages.map(page => (
    <li
      class={`p-3 cursor-pointer rounded-md ${
        page === currenPage
          ? 'bg-green-600 text-white font-bold'
          : 'border border-green-500 text-white'
      }`}
      key={page}
      onClick={() => setCurrenPage(page)}
    >
      {page}
    </li>
  ))}
</ul>
    
    </>
  )
}

export default ResidentLiss