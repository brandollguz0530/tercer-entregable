
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimencion } from './helpers/ramdon'
import axios from 'axios'
import Location from './components/Location'
import ResidentLiss from './components/ResidentLiss'



function App() {
    const [location, setLocation] = useState()

    const handleSubmit = (e) => {
      e.preventDefault()
        const newLocation = e.target.locationId.value

        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
        axios.get(URL)
          .then((res) => setLocation(res.data))
          .catch((err) => console.log(err))
    }
  
  useEffect(() => {
  const URL = `https://rickandmortyapi.com/api/location/${getRandomDimencion()}`
      
  axios.get(URL)
  .then((res) => setLocation(res.data))
  .catch((err) => console.log(err))

  }, [])   
  return (
    <div className="App " >
    
    
    <div className="flex justify-center items-center h-screen">
  <form onSubmit={handleSubmit} class="w-full max-w-lg p-4  rounded-md">
    <div class="flex items-center">
      <input id='locationId' placeholder='type a location Id...'  className=' border-2 flex-grow py-2 px-4 mr-2 rounded-md' type="text" />
      <button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
        search <i className='bx bx-search-alt-2 bx-burst'></i>
      </button>
    </div>
    <h2 class="mt-4 text-center text-white">welcome to the crazy universe!</h2>
  </form>
</div>
        <Location location={location}/>
        <ResidentLiss location={location}/>

      
    </div>
   
  )
  }

export default App
