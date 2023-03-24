import React from 'react'
import data from '../../data/data.json'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../slices/Slices'
import { Carousel } from './Carousel'

export const Produits = () => {

  const dispatch = useDispatch()

  const acheter = (donnee) => {

    // dispatch(add(donnee))
    dispatch(add({id:Date.now(), nom:donnee.nom, image_url:donnee.image_url, prix:donnee.prix}))
  
  }

  return (
    <div className='pl-3'>
      <Carousel/>
      <div className='uppercase text-white p-2 bg-pink-500 my-5 rounded-lg'>notre sélection de produits américains</div>
      <p className='text-gray-600 mb-5 text-sm italic'>Nos produits</p>
      <div className='grid grid-rows-2 grid-flow-col gap-4'>
        {data.chocolats.map((donnee) => (
          <div key={donnee.nom}>
            <img src={donnee.image_url} className="w-full h-[40%]" alt="" />
            <p className='font-bold'>{donnee.nom}</p>
            <p>{donnee.description}</p>
            <div className='flex justify-between items-baseline mt-8'>
              <p className='font-bold text-xl text-pink-500'>{donnee.prix} €</p
              ><button onClick={() => {acheter(donnee)}} className='bg-gray-300 text-gray-600 px-4 py-2 rounded-sm font-bold'>Acheter</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
