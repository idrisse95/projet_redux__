import React from 'react'
import data from '../../data/data.json'
import { Link } from 'react-router-dom';

export const Bonbons = () => {

    const bonbons = data.bonbons;

  return (
    <div id='bonbons'>
        {bonbons.map((bonbon, index)=> 
        <Link to={`${bonbon.nom}`} key={index} className='cardBonbon'>
            <div className='imgCont'>
                <img src={bonbon.image_url} alt="paquet bonbon" />
            </div>
            <h3>{bonbon.nom}</h3>
            <p className='prix'>Prix: {bonbon.prix}€</p>
            <p className='description'>{bonbon.description}</p>
        </Link>)}
    </div>
  )
}
