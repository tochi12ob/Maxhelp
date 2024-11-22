import React from 'react'
import ChartSection from '../../landing-components/ChartSection'
import TableSection from '../../landing-components/TableSection'
import RestockDashboard from '../../landing-components/RestockDashboard'
import Write
 from '../../landing-components/Write'

const Management = () => {
  return (
    <div className='h-[200vh] bg-white p-6 rounded'>
      <ChartSection/>
      <TableSection/>
      <RestockDashboard/>
      {/* <Write/> */}
    </div>
   
  )
}

export default Management