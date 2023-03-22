import React from 'react'
import data from '../../data/data.json'

export const Chips = () => {

    const chips = data.chips;

  return (
    <div id='chips'>
        {chips.map((chips, index)=> 
        <div key={index} className='cardBonbon'>
            <div className='imgCont'>
                <img src={chips.image_url} alt="paquet chips" />
            </div>
            <h3>{chips.nom}</h3>
            <p className='prix'>Prix: {chips.prix}€</p>
            <p className='description'>{chips.description}</p>
        </div>)}
    </div>
  )
}