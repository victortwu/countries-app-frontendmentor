import React, { useState } from 'react'

const RegionFilter = (props) => {

const [dropdown, setDropdown] = useState(false)

const regions = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania', 'Polar']

const toggleClass = props.darkMode ? 'searchDark' : 'searchLight'

const toggleDropdown = dropdown ? 'show' : 'hide'

return(
    <div className='regionFilterContainer'>
      <div className={`regionInputBar ${toggleClass}` }>Filter By Region<span
                  style={{fontWeight: '600'}}
                  onClick={() => setDropdown(!dropdown)}>{
                    dropdown ? '^' : 'v'
                  }</span></div>
      <div className={toggleDropdown}>
        <div className={`regionsDropdown ${toggleClass}`}>
          {
            regions.map((region, i) => {
              return <span key={i + region} onClick={() =>
                {
                    props.getData(`region/${region}`)
                    setDropdown(!dropdown)
                }
              }>{region}</span>
            })
          }
          <span onClick={() =>
            {
              props.getData('all')
              setDropdown(!dropdown)
            }
          }>All Regions</span>
        </div>
      </div>
    </div>
  )
}

export default RegionFilter
