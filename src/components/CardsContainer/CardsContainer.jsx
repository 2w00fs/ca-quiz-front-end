import React from 'react'
import './style/CardsContainer.css'

const CardsContainer = ({ maxColumns, children }) => {
  return (
    <div className={'cards-container'}>
        {children}
    </div>
  )
}

export default CardsContainer