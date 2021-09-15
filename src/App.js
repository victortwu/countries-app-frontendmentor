import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css';

const App = () => {



const [darkMode, setDarkMode] = useState(false)
const [data, setData] = useState([])

const toggleTheme = darkMode ? 'darkMode' : 'lightMode'
const toggleCard = darkMode ? 'darkCard' : 'lightCard'
const toggleHeader = darkMode ? 'darkHeader' : 'lightHeader'


const getCountries = () => {
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => {
    // console.log(res.json())
    return res.json()
  })
  .then(json => {
    // console.log(json)
    setData(json)
  })
  .catch(err => {console.error(err)})
}

useEffect(() => {
  getCountries()
  // setData(recs)
}, [])


console.log(data)

  return (
    <div className={toggleTheme}>
      <header className={toggleHeader}>
        <span>Where in the world?</span>
        <span onClick={()=> setDarkMode(!darkMode)}>{
          darkMode ? 'Light Mode' : 'Dark Mode'
        }</span>
      </header>


        <main className='countriesMain'>
            <div className='searchBars'>
                <div className='nameSearchBar'>
                  Search for a country
                </div>

                <div className='filterRegionDiv'>
                  Filter By Region
                </div>
            </div>
              <div className='cardsContainer'>
              {
                data.map(country => {
                  return <Card
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  id={country.numericCode}
                  toggleCard={toggleCard}
                  darkMode={darkMode}/>
                })
              }


              </div>
        </main>
    </div>
  );
}

export default App;
