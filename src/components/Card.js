import React, { useState } from 'react'

const Card = (props) => {

const [showModal, setShowModal] = useState(false)

const bold600 = {fontWeight: '600'}
const toggleClass = showModal ? 'show' : 'hide'

const getCurrencies = () => {
  return props.data.currencies.map(el => {return <li>{el.name}</li>})
}

const getTopLevelDom = () => {
  return props.data.topLevelDomain.map(el => {return <li>{el}</li>})
}

const getLanguages = () => {
  return props.data.languages.map(el => {return <li>{el.name}</li>})
}

const getBorderCountries = () => {
  return props.data.borders.map(code => {
    if (props.countryCodesObj[`${code}`]){
        return <button onClick={()=> {
          props.getData('name/' + props.countryCodesObj[`${code}`])
          setShowModal(false)
        }}>{props.countryCodesObj[`${code}`]}</button>
    }
  })
}

  return(
    <>
    <div key={props.data.name} onClick={() => {
                          setShowModal(true)
                          window.scrollTo(0,0)
                        }} className={props.toggleCard}>
      <div className='cardDiv'>
        <img src={props.data.flag} alt={props.data.name}/>
        <div className='cardContent'>
            <h4>{props.data.name}</h4>
            <p><span style={bold600}>Population: </span><span>{props.data.population.toLocaleString('en-US')}</span></p>
            <p><span style={bold600}>Region: </span><span>{props.data.region}</span></p>
            <p><span style={bold600}>Capital: </span><span>{props.data.capital}</span></p>

        </div>
      </div>
    </div>
    <div className={toggleClass}>
      <div className='viewCountry'>
      <button onClick={()=> setShowModal(false)}>BACK</button>
      <div className='imgContainer'><img src={props.data.flag} alt='flag'/></div>
      <div className='modalStats'>
        <h2>{props.data.name}</h2>
        <ul className='leftUL'>
          <li><span style={bold600}>Native Name: </span>{props.data.nativeName}</li>
          <li><span style={bold600}>Population: </span>{props.data.population.toLocaleString('en-US')}</li>
          <li><span style={bold600}>Region: </span>{props.data.region}</li>
          <li><span style={bold600}>Sub Region: </span>{props.data.subregion}</li>
          <li><span style={bold600}>Capital: </span>{props.data.capital}</li>

        </ul>
        <ul className='rightUL'>
          <li><span style={bold600}>Top Level Domain: </span>{getTopLevelDom()}</li>
          <li><span style={bold600}>Currencies: </span>{getCurrencies()}</li>
          <li><span style={bold600}>Languages: </span>{getLanguages()}</li>
        </ul>
        <div className='borderCountries'>
        <span style={bold600}>Border Countries: </span>
        <ul>{getBorderCountries()}</ul>
        </div>

      </div>
      </div>
    </div>
    </>
  )
}

export default Card
