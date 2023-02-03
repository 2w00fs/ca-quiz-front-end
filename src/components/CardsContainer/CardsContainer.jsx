import React from 'react'
import './style/CardsContainer.css'

const CardsContainer = ({ maxColumns, children }) => {
  return (
    <div className={'cards-container' + `${maxColumns ? ' max-columns-' + maxColumns : ' max-columns-3'}`}>
        {children}
    </div>
  )
}

export default CardsContainer