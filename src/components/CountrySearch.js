import React from 'react'
import { ReactComponent as SearchIcon } from '../assets/icons8-search.svg'


const CountrySearch = (props) => {

const inputRef = React.useRef()

    const handleChange = (e) => {
      e.preventDefault()

      props.getData(`name/${e.target.value}`)
      setTimeout(() => {
        console.log('set timeout')
        inputRef.current.value = ''
      }, 3000)
    }

const toggleClass = props.darkMode ? 'searchDark' : 'searchLight'

return(
    <div className={`nameSearchBar ${toggleClass}`}>
    <div className='searchIcon'><SearchIcon/></div>
    <input ref={inputRef} onChange={(e)=> handleChange(e)}list='countryNames' placeholder='Search for a country...'/>
      <datalist id='countryNames'>
        {
          props.countryNames.map((name, key) => {
            return <option onClick={() => console.log('clicked')} key={key} value={name}/>
          })
        }
      </datalist>

    </div>
  )
}

export default CountrySearch
