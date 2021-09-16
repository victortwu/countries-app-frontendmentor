import React from 'react'

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


return(
    <div className='nameSearchBar'>

    <input ref={inputRef} onChange={(e)=> handleChange(e)}list='countryNames' placeholder='Search gor a country...'/>
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
