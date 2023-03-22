import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delet } from '../../slices/Slices'

export const Panier = () => {

    const panier = useSelector(state => state.achat.panier)

    const [quantity, setQuantity] = useState(1)
    const [prix, setPrix] = useState(prix => prix * quantity)
    const [stock, setstock] = useState('En Stock !')
    const total = panier.reduce((somme, produit) => somme + produit.prix, 0)
    const dispatch =useDispatch()

    const supp =(donnee) => {
        dispatch(delet(donnee))
    }

    return (
        <div className='pl-3'>
            <p className='text-gray-600 text-sm italic'>Votre panier</p>
            <p className='font-bold text-lg'>Récapitulatif de la commande</p>
            <div className='flex justify-center gap-10 mt-5'>
                <div className='border border-pink-500 uppercase font-semibold text-pink-500 rounded-tr-lg rounded-bl-lg py-1 px-2'>1. Résumé</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>2. identifiez-vous</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>3. adresse</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>4. frais de port</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>5. paiement</div>
            </div>
            <div className='my-10'>d</div>
            <div >
                <table id='oe' className='font-bold'>
                    <thead className='bg-pink-500 py-5 w-full text-white uppercase'><th className=' py-3 pl-5 w-[10%]'>produit</th><th className=' drop-shadow-xl   w-[20%] text-start pl-3'>Description</th><th className=' w-[20%] text-start pl-3'>réf.</th><th className=' w-[15%] text-start pl-3'>Prix unitaire</th><th className=' w-[10%] text-start pl-3'>qté</th><th className=' text-start pl-3'>total</th><th></th></thead>

                    {panier.map((item) => (
                        <tbody key={item.nom}><td className='pl-5'><img src={item.image_url} alt="" /></td><td className='pl-3'><p>{item.nom}</p>
                            <p className='font-bold text-green-600'>{stock}</p></td><td className='pl-3'>{item.ref}</td><td className='pl-3'>{item.prix}</td><td className='pl-3'>{quantity}</td><td className='pl-3'>{item.prix * quantity}</td><td className='text-center'><button className='text-pink-500 
                     bg-gray-300 px-2 py-1 hover:text-white' onClick={() => { supp(item) }}>supprimer</button></td></tbody>
                    ))}
                    <tbody><td></td><td colSpan='5'>Un produit échantillon</td><td className='text-green-600'>Offert</td></tbody>

                    <tbody className='font-semibold bg-white'><td colSpan='5'>Total produits TTC:</td><td >{total} €</td></tbody>
                </table>
            </div>
          
        </div>
    )
}
