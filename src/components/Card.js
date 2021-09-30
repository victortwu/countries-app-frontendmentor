import React, { useState, useEffect } from 'react'

const Card = (props) => {


const [showModal, setShowModal] = useState(false)
const [borders, setBorders] = useState([])

const boxShadow = props.darkMode ? 'darkFlagShadow' : 'lightFlagShadow'
const viewPageTheme = props.darkMode ? 'darkModeViewPage' : 'lightModeViewPage'
const bold600 = {fontWeight: '600'}
const toggleModalClass = showModal ? 'show' : 'hide'


    // const getCurrencies = () => {
    //   return props.data.currencies.map((el, i) => {
    //     return <span key={i+el.name}>{el.name}{(i !== props.data.currencies.length - 1) ? ', ' : ''}</span>
    //   })
    // }
    //
    // const getTopLevelDom = () => {
    //   return props.data.topLevelDomain.map((el, i) => {
    //     return <span key={i+el}>{el}{(i !== props.data.topLevelDomain.length - 1) ? ', ' : ''}</span>
    //   })
    // }
    //
    // const getLanguages = () => {
    //   return props.data.languages.map((el, i) => {
    //     return <span key={i+el.name}>{el.name}{(i !== props.data.languages.length - 1) ? ', ' : ''}</span>
    //   })
    // }

    // const getBorderCountries = () => {
    //   const borderCountries =  props.data.borders.map((code, i) => {
    //     if (props.countryCodesObj[`${code}`]){
    //         return <button key={i+code} className={`borderBtn ${props.toggleViewBtn}`} onClick={()=> {
    //           props.getData('name/' + props.countryCodesObj[`${code}`])
    //           setShowModal(false)
    //         }}>{props.countryCodesObj[`${code}`]}</button>
    //     }
    //   })
    //   return borderCountries
    // }

    const getBorderCountries = () => {
      const borderCountries =  borders.map((code, i) => {

        if (props.countryCodesObj[`${code}`]){
            // return <button key={i+code} className={`borderBtn ${props.toggleViewBtn}`} onClick={()=> {
            //   props.getData('name/' + props.countryCodesObj[`${code}`])
            //   setShowModal(false)
            // }}>{props.countryCodesObj[`${code}`]}</button>
            console.log(props.countryCodesObj[`${code}`])

        }
        // else {
        //   console.log('No borders')
        // }

      })

    }

useEffect(()=> {
  setBorders(props.data?.borders ?? []) // safe operators, takes care of undefined or null values, thanks guy on stackoverflow
  getBorderCountries()
}, [])

console.log(borders)

  return(
    <>

    <div onClick={() => {
                          setShowModal(true)
                          window.scrollTo(0,0)
                      }} className={props.toggleCard}>
      <div className='cardDiv'>
        <img src={props.data.flag} alt={props.data.name}/>
        <div className='cardContent'>
            <h4 >{props.data.name}</h4>
            <p><span style={bold600}>Population: </span><span>{props.data.population.toLocaleString('en-US')}</span></p>
            <p><span style={bold600}>Region: </span><span>{props.data.region}</span></p>
            <p><span style={bold600}>Capital: </span><span>{props.data.capital}</span></p>

        </div>
      </div>
    </div>



    </>
  )
}

export default Card
// <div className={toggleModalClass}>
//
//   <div className={`viewCountryCnt ${viewPageTheme}`}>
//           <div className='btnContainer'>
//               <button
//                   className={`backBtn ${props.toggleViewBtn}`}
//                   onClick={()=> setShowModal(false)}>
//                   Back
//               </button>
//           </div>
//
//       <div className='viewContent'>
//
//             <div className='viewLeftCol'>
//
//                     <div className='imgContainer'><img className={`viewPageFlag ${boxShadow}`} src={props.data.flag} alt='flag'/></div>
//             </div>
//
//             <div className='viewRightCol'>
//
//                   <h3 className='viewTitle'>{props.data.name}</h3>
//
//                   <div className='leftUl'>
//                     <p><span style={bold600}>Native Name: </span>{props.data.nativeName}</p>
//                     <p><span style={bold600}>Population: </span>{props.data.population}</p>
//                     <p><span style={bold600}>Region: </span>{props.data.region}</p>
//                     <p><span style={bold600}>Sub Region: </span>{props.data.subregion}</p>
//                     <p><span style={bold600}>Capital: </span>{props.data.capital}</p>
//
//                   </div>
//
//                   <div className='rightUl'>
//                     <p><span style={bold600}>Top Level Domain: </span>{getTopLevelDom()}</p>
//                     <p><span style={bold600}>Currencies: </span>{getCurrencies()}</p>
//                     <section><span style={bold600}>Languages: </span><p>{getLanguages()}</p></section>
//                   </div>
//
//                   <div className='borderCountries'>
//                   <span style={bold600}>Border Countries: </span>
//                   {getBorderCountries()}
//                   </div>
//
//             </div>
//
//       </div>
//   </div>
// </div>
