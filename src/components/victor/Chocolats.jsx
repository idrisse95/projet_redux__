import React from 'react'
import data from '../../data/data.json'

export const Chocolats = () => {

    const chocolats = data.chocolats;

  return (
    <div id='chocolats'>
        {chocolats.map((chocolat, index)=> 
        <div key={index} className='cardBonbon'>
            <div className='imgCont'>
                <img src={chocolat.image_url} alt="paquet chocolat" />
            </div>
            <h3>{chocolat.nom}</h3>
            <p className='prix'>Prix: {chocolat.prix}€</p>
            <p className='description'>{chocolat.description}</p>
        </div>)}
    </div>
  )
}