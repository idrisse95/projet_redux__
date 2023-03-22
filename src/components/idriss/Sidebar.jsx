import React from 'react'
import img from '../../../public/img/bonbons/haribo.webp'

export const Sidebar = () => {
    return (
        <div className='pr-2'>
            <div className='bg-pink-500 text-white uppercase font-semibold px-2 py-2 rounded-lg mb-5'>nouveaux Produits</div>
            <div className='flex justify-center gap-10 my-2'>
                <div className='w-[40%] border'><img className='border p-1 shadow-lg' src={img} alt="" /></div>
                <div className='w-[40%] border'><img className='border p-1 shadow-lg' src={img} alt="" /></div>
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
                <p className='font-bold text-sm text-end'>Tous les nouveaux produits </p>
            </div>
            <div className='bg-pink-500 text-white uppercase font-semibold px-2 py-2 rounded-lg mt-8 mb-5'>Meilleures ventes</div>
            <div className='flex gap-2'>
                <div className='text-3xl text-gray-700 w-[10%] font-bold uppercase'>1</div>
                <div className='w-[25%] '><img className='border p-1 shadow-lg' src={img} alt="" /></div>
                <div className='w-[75%]'><p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing e
    
                </p>
                <p className='text-pink-500 font-bold text-lg'>1,49€</p></div>
            </div>
              <div className='w-full h-[1px] bg-gray-300 my-3'></div>
                <div className='flex gap-2'>
                <div className='text-3xl text-gray-700 w-[10%] font-bold uppercase'>2</div>
                <div className='w-[25%] '><img className='border p-1 shadow-lg' src={img} alt="" /></div>
                <div className='w-[75%]'><p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing e
    
                </p>
                <p className='text-pink-500 font-bold text-lg'>1,49€</p></div>
            </div>
              <div className='w-full h-[1px] bg-gray-300 my-3'></div>
                <div className='flex gap-2'>
                <div className='text-3xl text-gray-700 w-[10%] font-bold uppercase'>3</div>
                <div className='w-[25%] '><img className='border p-1 shadow-lg' src={img} alt="" /></div>
                <div className='w-[75%]'><p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing e
    
                </p>
                <p className='text-pink-500 font-bold text-lg'>1,49€</p></div>
            </div>
              <div className='w-full h-[1px] bg-gray-300 my-3'></div>
                <div className='flex gap-2'>
                <div className='text-3xl text-gray-700 w-[10%] font-bold uppercase'>4</div>
                <div className='w-[25%] '><img className='border p-1 shadow-lg' src={img} alt="" /></div>
                <div className='w-[75%]'><p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing e
    
                </p>
                <p className='text-pink-500 font-bold text-lg'>1,49€</p></div>
            </div>
              <div className='w-full h-[1px] bg-gray-300 my-3'></div>
              <div>
                <p className='font-bold text-sm text-pink-500 text-end'>Tous les nouveaux produits </p>
            </div>
        </div>
    )
}
