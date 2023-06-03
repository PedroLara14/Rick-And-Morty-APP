import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import mainImage2 from "../public/Rick-and-Morty-Horror-Font-1.webp";


function App() {

  const randomId = getRandomNumber(126);
  
  const [idLocation, setIdLocation] = useState(randomId);
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])


  return (
    <div className="app bg-background-color w-full min-h-screen scrollbar-custom">
      <img className="w-full object-cover h-[20rem]" src={mainImage2} alt="" />
      <FormSearch setIdLocation={setIdLocation} />
      {hasError ? (
        <h2 className="flex items-center justify-center mt-20 text-white text-2xl font-bold">
          ❌ Hey, you must provide an id from 1 to 126
        </h2>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container max-w-5xl mx-auto grid grid-cols-4 place-items-center gap-8">
            {location?.residents.map((url) => (
              <ResidentCard url={url} key={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 

export default App
