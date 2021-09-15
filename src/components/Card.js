

const Card = (props) => {

const bold600 = {fontWeight: '600'}

  return(
    <div className={props.toggleCard}>
      <div key={props.id} className='cardDiv'>
        <img src={props.flag}/>
        <div className='countryStats'>
            <h4>{props.name}</h4>
            <p><span style={bold600}>Population: </span><span>{props.population}</span></p>
            <p><span style={bold600}>Region: </span><span>{props.region}</span></p>
            <p><span style={bold600}>Capital: </span><span>{props.capital}</span></p>

        </div>
      </div>
    </div>
  )
}

export default Card
