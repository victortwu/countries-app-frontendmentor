import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import RegionFilter  from './components/RegionFilter'
import CountrySearch from './components/CountrySearch'
import { ReactComponent as DarkIcon } from './assets/Darkmodeicon.svg'
import { ReactComponent as LightIcon } from './assets/Lightmodeicon.svg'


import './App.css';

const App = () => {

// const baseURL = 'https://restcountries.eu/rest/v2/'
// const baseURL = 'https://restcountries.com/v2/'
const baseURL = 'https://restcountries.com/v3.1/'

const [darkMode, setDarkMode] = useState(false)

const [countryCodesObj, setCountryCodesObj] = useState({})
const [countryNames, setCountryNames] = useState([])
const [loading, setLoading] = useState(true)
const [data, setData] = useState([])

const toggleTheme = darkMode ? 'darkMode' : 'lightMode'
const toggleCard = darkMode ? 'darkCard' : 'lightCard'
const toggleHeader = darkMode ? 'darkHeader' : 'lightHeader'
const toggleViewBtn = darkMode ? 'darkBtn' : 'lightBtn'


const handleError = (res) => {

  if (!res.ok) {
    alert('Not a valid query')
    throw Error(res.statusText)
  }
  return res
}


const getData = (query) => {
  setLoading(true)
  let names
  let codeHash

  fetch(baseURL + query)

  .then(handleError)
  .then(res => {
      return res.json()
  })
  .then(json => {

      setData(json)

      if ( query === 'all' ) {
        // https://stackoverflow.com/questions/42974735/create-object-from-array/42974762
        // great tip on creating an object from this array - notice the parentheses enclosing the curlies
        codeHash = json.reduce((country, curr) => ({
          ...country, [curr.cca3]: curr.name.common
        }), {})

        names = json.map(country => {
          return country.name.common
        })
        setCountryCodesObj(codeHash)
        setCountryNames(names)
      }
      setLoading(false)
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

        <div className='themeBtnCnt'>
        <div className='iconDiv'>{darkMode ? <DarkIcon/> : <LightIcon/>}</div>
        <button id='themeBtn' onClick={()=> setDarkMode(!darkMode)}>{
          darkMode ? 'Light Mode' : 'Dark Mode'
        }</button>
        </div>
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
              {loading ? <h3 style={{marginTop: '5rem', textAlign: 'center', color: 'gray'}}>Loading...</h3> : <div className='cardsContainer'>

                {
                  data.map((country, i) => {

                    return <Card
                    key={i + country.name}
                    data={country}

                    countryCodesObj={countryCodesObj}

                    toggleViewBtn={toggleViewBtn}
                    toggleCard={toggleCard}
                    darkMode={darkMode}
                    getData={getData}
                  />
                  })
                }


              </div>}

        </main>
        <footer></footer>
    </main>
  );
}

export default App;
