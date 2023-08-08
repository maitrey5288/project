import React from 'react'
import firstimg from '../assets/722171.png'
import firstimg1 from '../assets/Rectangle50.png'
import FirstDesktop from './FirstDesktop' 
import FirstMobile from './FirstMobile'
 

const First = ({isTabletOrMobile}) => {
  return (

    isTabletOrMobile ?  <FirstMobile/>:<FirstDesktop/> 
    
  )
}

export default First