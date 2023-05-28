import React from 'react'
import './index.css'
import Filter from '../Filter/Filter'
import Card from '../Cards/Card'

const BodyContent = () => {
  return (
   <div className="container">
      <Filter />
      <Card/>
      
    </div>
  )
}

export default BodyContent