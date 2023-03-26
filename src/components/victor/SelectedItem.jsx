import React from 'react'
import data from '../../data/data.json'
import { useLocation } from 'react-router-dom';


export const SelectedItem = () => {

  const location = useLocation()

  const produit = location.state.bonbon

  console.log(produit);
  return (
    <div className='text-sm'>
      <p className='text-sm italic ml-16'>Home <i class="fa-solid fa-chevron-right italic  fa-2xs"></i><i class="fa-solid fa-chevron-right italic fa-2xs"></i> Bonbons <i class="fa-solid fa-chevron-right italic  fa-2xs"></i><i class="fa-solid fa-chevron-right italic fa-2xs"></i><span className='underline underline-offset-2'> {produit.nom}</span></p>
      <div className='mt-5 '>
        <div className='text-center text-3xl text-yellow-400 mb-8'>{produit.nom}</div>

        <div className='flex justify-center gap-10'>
          <div className='w-[45%]'> <img src={produit.image_url} className='h-full w-full' alt="" /></div>
          <div className='w-[40%] flex flex-col justify-between'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, sint omnis quo consequuntur laudantium accusamus, praesentium, voluptatum possimus aspernatur deserunt facere sunt doloribus! Tempore maxime eaque provident hic, earum quaerat?</p>
            <p className='my-2'>Origine du produit </p>
            <div className='h-[1px] bg-gray-400/50 w-full'></div>
            <p className='font-bold'>Disponibilité : <span className='text-green-600 uppercase font-semibold'>en stock !</span></p>
            <div className='border text-center mt-2 mb-1 py-2 px-4 w-full border-gray-500 rounded-lg bg-gray-300/50 border-dashed'>
              <p>Commandez avant <span className='text-blue-500'>11h</span> nous expédions votre commande <span className='text-blue-500'>le jour-même</span></p>
            </div>
            <p className='font-bold'><span className='text-blue-500'>Livraison offerte</span> dès 29,99€ !</p>
            <div className='h-[1px]  bg-gray-400/50  w-full'></div>
            <div className='flex justify-around'>
              <p className='text-pink-500 text-xl'>2,69 €</p>
              <div>
                <button className='bg-gray-300/50 text-pink-500 px-2 py-1 font-bold'>Ajouter au panier</button>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='flex justify-center mt-16'>
        <div className=' text-gray-500 text-sm border border-gray-200/50 w-[70%] pb-8 rounded-lg p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repellat consequatur a minima voluptate, dolores sit autem dolorum deserunt laboriosam.</div>
      </div>
    </div>
  )
}
