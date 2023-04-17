
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
    
    <form onSubmit={handleSubmit}>
      <div>
        <input id='locationId' placeholder='type a location Id...'  className=' border-2 ' type="text" />
        <button>search <i className='bx bx-search-alt-2 bx-burst'></i></button>
      </div>
      <h2>welcome to the crazy univese!</h2>
    </form>
        <Location location={location}/>
        <ResidentLiss location={location}/>

      
    </div>
   
  )
  }

export default App
