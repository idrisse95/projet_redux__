import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delet } from '../../slices/Slices'
export const Header = () => {

  // const nb = useSelector(state => state.achat.panier.length)
  const panier = useSelector(state => state.achat.panier)
  const nb = panier.reduce((somme, produit) => somme + produit.quant, 0)
  const total = panier.reduce((somme, produit) => somme + produit.prix*produit.quant, 0).toFixed(2)
  const zer = useSelector(state => state.achat.zer)
  const dispatch = useDispatch()

  const loginEmail = useSelector(state => state.connection.email);

  const supp = (item) => {
    dispatch(delet(item))
  }


  return (
    <header className='flex pt-5 flex-col justify-between mb-5 '>
      <div className='relative'>

        <div className='absolute top-0 right-5'>{loginEmail ? loginEmail : <Link to='connection'>Connection | Guest</Link>}</div>
        
        <div id='panier' className='text-end pr-5 relative mt-8'><Link to='panier' className='bg-pink-500 py-1 px-2 relative rounded-lg'>Panier <span className={`bg-white text-pink-500 rounded-full px-2 absolute -top-2 font-bold border-2 border-pink-700 ${zer}`}>{nb}</span></Link>
          <div id='pp' className='absolute right-5 top-7 bg-pink-500 px-4 py-3 text-black font-semibold rounded-md border'>
            <div className=''>
              {panier.map((item) => (
                <div className='flex justify-between gap-2 pb-2 mt-2'>
                  <div>{item.nom}</div>
                  <div>{item.prix * item.quant} €  QTE: {item.quant} <button className='text-red-800 uppercase px-2' onClick={() => { supp(item) }}>x</button></div>

                </div>
              ))}
            </div>
            <div className='font-bold flex justify-between border-t-black border-dashed border-2 border-l-transparent border-b-transparent border-r-transparent mb-2 mt-3 pt-2'>
              <p >Total de vos produits</p>
              <p >{total}€</p>

            </div>
            <Link to="/paiement" className='text-end'><button className='text-sm text-pink-500 bg-gray-300 py-1 rounded-lg border border-green-500 px-1'>Commander</button></Link>
          </div>
        </div>
        <div className='text-center mt-[5%]'><input type="text" className='oe' placeholder='Recherche' /></div>

      </div>
      <nav className='flex text-white justify-around  pt-3'>
        <Link className='hover:bg-pink-400 rounded-t-lg  py-1 px-2' to='/'>Home</Link>
        <Link className='hover:bg-pink-400 rounded-t-lg  py-1 px-2' to={'bonbons'}>Bonbons</Link>
        <Link className='hover:bg-pink-400 rounded-t-lg  py-1 px-2' to={'chocolats'}>Chocolat</Link>
        <Link className='hover:bg-pink-400 rounded-t-lg  py-1 px-2' to={'chips'}>Chips</Link>
        <Link className='hover:bg-pink-400 rounded-t-lg  py-1 px-2' to={'soda'}>Soda</Link>
      </nav>
    </header>
  )
}
