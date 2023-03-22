import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className='flex'>
            <input type="text" placeholder='Recherche'/>
            <p>Pannier</p>
        </div>
        <nav className='flex justify-between'>
            <Link to={'bonbons'}>Bonbons</Link>
            <Link to={'chocolats'}>Chocolat</Link>
            <Link to={'chips'}>Chips</Link>
            <Link to={'soda'}>Soda</Link>
        </nav>
    </header>
  )
}
