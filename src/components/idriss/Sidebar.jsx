import React from 'react'

export const Sidebar = () => {
    return (
        <div>
            <div className='bg-pink-500 text-white uppercase font-semibold py-2 rounded-lg'>nouveaux Produits</div>
            <div className='flex justify-center gap-10 my-2'>
                <div className='w-[40%] border'>img1</div>
                <div className='w-[40%] border'>img2</div>
            </div>
            <div>
                <p className='font-semibold text-lg'>Lorem ipsum dolor sit sldl ee.
                </p>
                <p>Lorem ipsum dolor...</p>
                <p className='text-pink-500 font-semibold'>Lire plus</p>
            </div>
            <div className='w-full h-[1px] bg-gray-300 my-3'></div>
            <div>
                <p className='font-semibold text-lg'>Lorem ipsum dolor sit sldl ee.
                </p>
                <p>Lorem ipsum dolor...</p>
                <p className='text-pink-500 font-semibold'>Lire plus</p>
            </div>
            <div>
                <p className='font-semibold text-end'>Tous les nouveaux produits </p>
            </div>
            <div className='bg-pink-500 text-white uppercase font-semibold py-2 rounded-lg mt-5'>Meilleures ventes</div>
            <div className='flex'>
                <div className='text-3xl text-gray-700 w-[5%] font-bold uppercase'>1</div>
                <div className='w-[20%] border'>img1</div>
                <div className='w-[75%]'><p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
    
                </p>
                <p className='text-pink-500 font-bold text-lg'>1,49€</p></div>
            </div>
        </div>
    )
}
