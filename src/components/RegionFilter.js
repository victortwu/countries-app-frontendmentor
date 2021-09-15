const RegionFilter = (props) => {

const regions = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania', 'Polar']

return(
    <div className='filterRegionDiv'>
      <div className='regionInputBar'>Filter By Region<span onClick={() => console.log('drop down')}>v</span></div>
      <div className='regionsDropdown'>
        {
          regions.map(region=> {
            return <span onClick={() => props.getData(`region/${region}`)}>{region}</span>
          })
        }
        <span onClick={() => props.getData('all')}>All</span>
      </div>
    </div>
  )
}

export default RegionFilter
