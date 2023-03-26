import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delet } from '../../slices/Slices'

export const Panier = () => {

    const panier = useSelector(state => state.achat.panier)

    const [quantity, setQuantity] = useState(1)
    const [prix, setPrix] = useState(prix => prix * quantity)
    const [stock, setstock] = useState('En Stock !')
    const total = panier.reduce((somme, produit) => somme + produit.prix, 0).toFixed(2)
    const dispatch = useDispatch()

    const supp = (donnee) => {
        dispatch(delet(donnee))
    }

    return (
        <div className='pl-3 pb-[60px]'>
            <p className='text-gray-600 text-sm italic'>Votre panier</p>
            <p className='font-bold text-lg'>Récapitulatif de la commande</p>
            <div className='flex justify-center gap-10 mt-5'>
                <div className='border border-pink-500 uppercase font-semibold text-pink-500 rounded-tr-lg rounded-bl-lg py-1 px-2'>1. Résumé</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>2. identifiez-vous</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>3. adresse</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>4. frais de port</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>5. paiement</div>
            </div>
            <div className='my-14 relative h-[1px] w-full bg-black'>

                <div className='absolute left-16 -top-3 bg-pink-500 rounded-full p-3'></div>
                <div className='absolute left-[250px] -top-3 bg-black rounded-full p-3'></div>
                <div className='absolute left-[410px] -top-3 bg-black rounded-full p-3'></div>
                <div className='absolute left-[570px] -top-3 bg-black rounded-full p-3'></div>
                <div className='absolute left-[740px] -top-3 bg-black rounded-full p-3'></div>


            </div>
            <div >
                <table id='oe' className='font-bold'>
                    <thead className='bg-pink-500 py-5 w-full text-white uppercase'><th className=' py-3 pl-5 w-[10%]'>produit</th><th className=' drop-shadow-xl   w-[20%] text-start pl-3'>Description</th><th className=' w-[20%] text-start pl-3'>réf.</th><th className=' w-[15%] text-start pl-3'>Prix unitaire</th><th className=' w-[10%] text-start pl-3'>qté</th><th className=' text-start pl-3'>total</th><th></th></thead>

                    {panier.map((item) => (
                        <tbody key={item.nom}><td className='pl-5'><img src={item.image_url} alt="" /></td><td className='pl-3'><p>{item.nom}</p>
                            <p className='font-bold text-green-600'>{stock}</p></td><td className='pl-3'>{item.ref}</td><td className='pl-3'>{item.prix}</td><td className='pl-3'>{quantity}</td><td className='pl-3'>{item.prix * quantity}</td><td className='text-center'><button className='text-pink-500 
                     bg-gray-300 px-2 py-1 hover:text-white' onClick={() => { supp(item) }}>supprimer</button></td></tbody>
                    ))}
                    
                    <tbody><td></td><td colSpan='5'>Un produit échantillon</td><td className='text-green-600 text-center'>Offert</td></tbody>

                    <tbody className='font-semibold bg-white'><td className='py-2' colSpan='5'>Total produits TTC:</td><td colSpan='2' className='text-end pr-3 text-lg'>{total} €</td>
                    </tbody>
                    <tbody><td rowSpan="2" colSpan='5' className='font-bold'>Code promo <label htmlFor="" ><input type="text" className='h-[30px] oe' /><button className='bg-gray-500 shadow-lg  p-1 text-white h-full'>OK</button></label></td> <td colSpan='2' className='text-white py-1 pl-1 bg-pink-500  '>TOTAL TTC <span className='text-xs  font-semibold'>(HORS LIVRAISON)</span></td> <tr><td colSpan="2" className='text-center py-2'>{total} €</td></tr> </tbody>
                </table>
            </div>





        </div>
    )
}
