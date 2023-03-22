import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Header = () => {

  const nb = useSelector(state => state.achat.panier.length)
  const panier = useSelector(state => state.achat.panier)

  return (
    <header className='flex pt-5 flex-col justify-between mb-5 '>
      <div>

        <div className='text-end pr-5'><Link to='panier' className='bg-pink-500 py-1 px-2 relative rounded-lg'>Panier <span className="bg-white text-pink-500 rounded-full px-2 absolute -top-2 font-bold border-2 border-pink-700">{nb}</span></Link>
          <div>
            {panier.map((item) => (
              <div >
                <div><img src={item.image_url} className="w-[50px]" alt="" /> </div>
                <div>{item.nom}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center mt-[5%]'><input type="text" placeholder='Recherche' /></div>

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
