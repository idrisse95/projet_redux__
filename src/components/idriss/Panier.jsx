import React from 'react'

export const Panier = () => {
    return (
        <div>
            <p className='text-gray-600 text-sm italic'>Votre panier</p>
            <p className='font-bold text-lg'>Récapitulatif de la commande</p>
            <div className='flex justify-center gap-16 mt-5'>
                <div className='border border-pink-500 uppercase font-semibold text-pink-500 rounded-tr-lg rounded-bl-lg py-1 px-2'>1. Résumé</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>2. identifiez-vous</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>3. adresse</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>4. frais de port</div>
                <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>5. paiement</div>
            </div>
            <div className='my-10'>d</div>
            <div >
                <table>
                    <thead className='bg-pink-500 py-5 w-full text-white uppercase'><th className=' py-3 pl-5 w-[10%]'>produit</th><th className=' drop-shadow-xl   w-[20%] text-start pl-3'>Description</th><th className=' w-[20%] text-start pl-3'>réf.</th><th className=' w-[15%] text-start pl-3'>Prix unitaire</th><th className=' w-[10%] text-start pl-3'>qté</th><th className=' text-start pl-3'>total</th><th></th></thead>

                    <tbody><tbody className='pl-5'>test</tbody><tbody className='pl-3'>test</tbody><tbody className='pl-3'>test</tbody><tbody className='pl-3'>test</tbody><tbody className='pl-3'>test</tbody><tbody className='pl-3'>test</tbody></tbody>
                </table>
            </div>
        </div>
    )
}
