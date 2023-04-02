import React from 'react'
import data from '../../data/data.json'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../slices/Slices'
import { Carousel } from './Carousel'

export const Produits = () => {
  const panier = useSelector(state => state.achat.panier);

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
      {/* <div className='grid grid-rows-2 grid-flow-col gap-4'>
        {data.chocolats.map((donnee) => (
          <div key={donnee.nom}>
            <img src={donnee.image_url} className="w-full h-[40%]" alt="" />
            <p className='font-bold'>{donnee.nom}</p>
            <p>{donnee.description}</p>
            <div className='flex justify-between items-baseline mt-8'>
              <p className='font-bold text-xl text-pink-500'>{donnee.prix} €</p>
              <button onClick={() => {acheter(donnee)}} className='bg-gray-300 text-gray-600 px-4 py-2 rounded-sm font-bold'>Acheter</button>
            </div>
          </div>
        ))}
      </div> */}
      <div id='chocolats'>
      <div className='flex flex-wrap gap-5 text-sm pl-5 '>
          {data.chocolats.map((chocolat, index)=>
          <div  key={index} className='cardBonbon border p-2 rounded-lg shadow-lg'>
              <div className='imgCont mb-2'>
                  <img src={chocolat.image_url} alt="paquet bonbon" />
              </div>
              <p className='text-lg font-semibold'>{chocolat.nom}</p>
              <p className='prix'>Prix: {chocolat.prix}€</p>
              <p className='description'>{chocolat.description}</p>
              
              {panier.find((item)=>item.nom === chocolat.nom) ? 
                chocolat.stock > panier.find((item)=>item.nom === chocolat.nom).quant ?
                  <p className='text-green-500'>Stock: {chocolat.stock - panier.find((item)=>item.nom === chocolat.nom).quant}</p> : 
                  chocolat.stock <= panier.find((item)=>item.nom === chocolat.nom).quant ?
                    <p className='text-red-500'>Produit indisponnible</p> : 
                    <p className='text-green-500'>Stock: {chocolat.stock}</p>
              : <p className='text-green-500'>Stock: {chocolat.stock}</p>}

              <div className='flex justify-between'>
              {panier.find((item)=>item.nom === chocolat.nom) ? chocolat.stock <= panier.find((item)=>item.nom === chocolat.nom).quant ? <button className="bg-red-100 py-1 px-3 text-red-500 mt-5">Acheter</button> : <button onClick={() => {acheter(chocolat)}} className="bg-gray-300/50 py-1 px-3 text-pink-500 mt-5">Acheter</button> : <button onClick={() => {acheter(chocolat)}} className="bg-gray-300/50 py-1 px-3 text-pink-500 mt-5">Acheter</button>}
              <button className="bg-gray-300/50 py-1 px-3 text-green-500 mt-5"  onClick={()=>{bonbonPick(chocolat)}}>Details</button></div>
          </div>)}
        </div>
      </div>
      
    </div>
  )
}
