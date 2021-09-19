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
const toggleViewPage = darkMode ? 'viewCountryCnt darkModeViewPage' : 'viewCountryCnt lightModeViewPage'
const toggleViewBtn = darkMode ? 'darkBtn' : 'lightBtn'



const getData = (query) => {
  let names
  let codeHash
  fetch(baseURL + query)
  .then(res => {
    return res.json()
  })
  .then(json => {

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
        <span onClick={()=> getData('all')}>Where in the world?</span>
        <button onClick={()=> setDarkMode(!darkMode)}>{
          darkMode ? 'Light Mode' : 'Dark Mode'
        }</button>
      </header>


        <main className='countriesMain'>
            <div className='searchBars'>

                <CountrySearch
                    countryNames={countryNames}
                    getData={getData}
                    darkMode={darkMode}
                />

                <RegionFilter
                    data={data}
                    getData={getData}
                    darkMode={darkMode}
                />

            </div>
              <div className='cardsContainer'>

                {
                  data.map((country, i) => {
                    return <Card
                    data={country}
                    countryCodesObj={countryCodesObj}
                    toggleViewPage={toggleViewPage}
                    toggleViewBtn={toggleViewBtn}
                    toggleCard={toggleCard}
                    darkMode={darkMode}
                    getData={getData}
                  />
                  })
                }


              </div>

        </main>
        <footer></footer>
    </main>
  );
}

export default App;
