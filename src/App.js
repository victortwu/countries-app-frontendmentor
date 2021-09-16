import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import RegionFilter  from './components/RegionFilter'
import CountrySearch from './components/CountrySearch'
import './App.css';

const App = () => {

const baseURL = 'https://restcountries.eu/rest/v2/'

const [darkMode, setDarkMode] = useState(false)
const [countryCodesObj, setCountryCodesObj] = useState({})
const [countryNames, setCountryNames] = useState([])
const [data, setData] = useState([])

const toggleTheme = darkMode ? 'darkMode' : 'lightMode'
const toggleCard = darkMode ? 'darkCard' : 'lightCard'
const toggleHeader = darkMode ? 'darkHeader' : 'lightHeader'


const getData = (query) => {
  let names
  let codeHash
  fetch(baseURL + query)
  .then(res => {
    return res.json()
  })
  .then(json => {
    codeHash = json.reduce((country, curr) => ({
      ...country, [curr.cioc]: curr.name
    }), {})

    names = json.map(country => {
      return country.name
    })

    setData(json)

    if ( query === 'all' ) {
      // https://stackoverflow.com/questions/42974735/create-object-from-array/42974762
      // great tip on creating an object from this array - notice the parentheses enclosing the curlies
      codeHash = json.reduce((country, curr) => ({
        ...country, [curr.cioc]: curr.name
      }), {})

      names = json.map(country => {
        return country.name
      })
      setCountryCodesObj(codeHash)
      setCountryNames(names)
    }


  })
  .catch(err => {console.error(err)})
}


useEffect(() => {
  getData('all')

}, [])


  return (
    <main className={toggleTheme}>
      <header className={toggleHeader}>
        <span>Where in the world?</span>
        <button onClick={()=> setDarkMode(!darkMode)}>{
          darkMode ? 'Light Mode' : 'Dark Mode'
        }</button>
      </header>


        <main className='countriesMain'>
            <div className='searchBars'>

                <CountrySearch countryNames={countryNames} getData={getData}/>

                <RegionFilter data={data} getData={getData}/>

            </div>
              <div className='cardsContainer'>
              {
                data.map((country, i) => {
                  return <Card
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  id={i + country.numericCode}
                  toggleCard={toggleCard}
                  darkMode={darkMode}/>
                })
              }


              </div>
        </main>
    </main>
  );
}

export default App;
