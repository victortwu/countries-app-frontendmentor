import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {


const [darkMode, setDarkMode] = useState(false)
const [data, setData] = useState([])

const toggleTheme = darkMode ? 'darkMode' : 'lightMode'
const toggleCardStyle = darkMode ? 'darkCard' : 'lightCard'
const toggleHeader = darkMode ? 'darkHeader' : 'lightHeader'
let recs = []

const getRecs = () => {
  for(let i = 0; i < 8; i++) {
    recs.push(<div key={i} className='cardDiv'/>)
  }
}

useEffect(() => {
  getRecs()
  setData(recs)
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
                  data.map(elem => {
                    return <div className={toggleCardStyle}>{elem}</div>
                  } )
                }

              </div>
        </main>
    </div>
  );
}

export default App;
