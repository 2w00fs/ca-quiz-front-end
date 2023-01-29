import React from 'react'
import './style/CardsContainer.css'

const CardsContainer = ({ children }) => {
  return (
    <div className={'cards-container-cols-max3'}>
        {children}
    </div>
  )
}

export default CardsContainer