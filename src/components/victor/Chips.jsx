import React from 'react'
import data from '../../data/data.json'
import {useNavigate} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../slices/Slices'

export const Chips = () => {
    const panier = useSelector(state => state.achat.panier);

    const chips = data.chips;
    const navigate = useNavigate()

    const bonbonPick = (bonbon) => {
      window.scroll(0,0)
    navigate(`/selected/${bonbon.nom}`,{state: {bonbon}})
    }

    const dispatch = useDispatch()

    const acheter = (donnee) => {
  
      // dispatch(add(donnee))
      dispatch(add({ id:Date.now(),nom:donnee.nom, image_url:donnee.image_url, prix:donnee.prix}))
      console.log(donnee);
    }

  return (
    
    <div id='chips'>
      <p className='text-sm italic'>Home <i className="fa-solid fa-chevron-right italic  fa-2xs"></i><i className="fa-solid fa-chevron-right italic fa-2xs"></i> Chips</p>
       <div className='w-[60%] mb-10 mt-8'>
         <table className='w-full rounded-0 border border-pink-500 rounded-lg'>
          <thead className='bg-pink-500 uppercase pl-3 py-1 font-bold text-white '>Filtrer par marque</thead>
          <tbody>
            <div className='flex justify-between'><p className="pl-3">Marques</p>
            <span className='border text-sm '>-</span></div>
          </tbody>
         </table>
       </div>
        <div className='flex flex-wrap gap-5 text-sm pl-5 '>
          {chips.map((chip, index)=>
          <div  key={index} className='cardBonbon border p-2 rounded-lg shadow-lg'>
              <div className='imgCont mb-2'>
                  <img src={chip.image_url} alt="paquet bonbon" />
              </div>
              <p className='text-lg font-semibold'>{chip.nom}</p>
              <p className='prix'>Prix: {chip.prix}€</p>
              <p className='description'>{chip.description}</p>
              
              {panier.find((item)=>item.nom === chip.nom) ? 
                chip.stock > panier.find((item)=>item.nom === chip.nom).quant ?
                  <p className='text-green-500'>Stock: {chip.stock - panier.find((item)=>item.nom === chip.nom).quant}</p> : 
                  chip.stock <= panier.find((item)=>item.nom === chip.nom).quant ?
                    <p className='text-red-500'>Produit indisponnible</p> : 
                    <p className='text-green-500'>Stock: {chip.stock}</p>
              : <p className='text-green-500'>Stock: {chip.stock}</p>}

              <div className='flex justify-between'>
              {panier.find((item)=>item.nom === chip.nom) ? chip.stock <= panier.find((item)=>item.nom === chip.nom).quant ? <button className="bg-red-100 py-1 px-3 text-red-500 mt-5">Acheter</button> : <button onClick={() => {acheter(chip)}} className="bg-gray-300/50 py-1 px-3 text-pink-500 mt-5">Acheter</button> : <button onClick={() => {acheter(chip)}} className="bg-gray-300/50 py-1 px-3 text-pink-500 mt-5">Acheter</button>}
              <button className="bg-gray-300/50 py-1 px-3 text-green-500 mt-5"  onClick={()=>{bonbonPick(chip)}}>Details</button></div>
          </div>)}
        </div>
    </div>
  )
}