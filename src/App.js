
import './App.css';

const App = () => {

let recs = []

for(let i = 0; i < 8; i++) {
  recs.push(<div key={i} className='card'/>)
}


  return (
    <div className="App">
      <header>
        <span>Where in the world?</span>
        <span>Dark Mode</span>
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
              recs.map(elem => {return elem} )
            }
            </div>
        </main>
    </div>
  );
}

export default App;
