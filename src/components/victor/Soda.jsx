import React from 'react'
import data from '../../data/data.json'

export const Soda = () => {

    const soda = data.sodas;

  return (
    <div id='soda'>
        {soda.map((soda, index)=> 
        <div key={index} className='cardBonbon'>
            <div className='imgCont'>
                <img src={soda.image_url} alt="paquet soda" />
            </div>
            <h3>{soda.nom}</h3>
            <p className='prix'>Prix: {soda.prix}€</p>
            <p className='description'>{soda.description}</p>
        </div>)}
    </div>
  )
}
