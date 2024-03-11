import { useEffect, useState } from 'react'
import getRandomNumber from './services/getRandomNumber'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'

function App() {
  const randomLocation = getRandomNumber(126)
  const [locationSelected, setLocationSelected] = useState (randomLocation)
  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126)}`
 const [location, getLocation, hasError] = useFetch(url)

useEffect(()=>{
getLocation()

},[locationSelected])


  return (
  <div className='app'>
  <div className='app__container'>
    <img className = 'app__image--label' src={'/letra.png'} alt="" />
    <img className='app__image--background' src={'/fondo.png'} alt="" />
  </div>
    <FormSearch setLocationSelected = {setLocationSelected}/>
    {
      hasError
      ?<h2 className='app__error'>🦏Hey! You must provide and id from 1 to 126</h2>
      :<> 
      <LocationInfo location = {location}/>
      <div className='conteiner-resident'>
        {
          location?.residents.map(url => (
          <ResidentCard
          key={url}
          url={url}
          />
          ))
        }
      </div>
      
      </>

   
    }
    
  </div>
  )
}

export default App
