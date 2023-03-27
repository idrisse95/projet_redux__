
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Carousel } from './components/idriss/Carousel'
import { Paiement } from './components/idriss/Paiement'
import { Panier } from './components/idriss/Panier'
import { Produits } from './components/idriss/Produits'
import { Sidebar } from './components/idriss/Sidebar'
import { LayoutMain } from './components/LayoutMain'
import { Bonbons } from './components/victor/Bonbons'
import { Chips } from './components/victor/Chips'
import { Chocolats } from './components/victor/Chocolats'
import { Connection } from './components/victor/Connection'
import { SelectedItem } from './components/victor/SelectedItem'
import { Soda } from './components/victor/Soda'

function App() {

  return (
    <div className=" App">


      <div className='flex justify-center'>
        <div className='w-[75%] shadow-xl  bg-white'>
          <LayoutMain />
          <div className=' gap-[2%] flex'>
            <div className='w-[75%]'>
              <Routes>
              <Route path='/' element={<Produits />} />
              <Route path='bonbons' element={<Bonbons />} />
              <Route path='selected/:nom' element={<SelectedItem />} />
              <Route path='chocolats' element={<Chocolats />} />
              <Route path='chips' element={<Chips />} />
              <Route path='soda' element={<Soda />} />
              <Route path='connection' element={<Connection />} />
              <Route path='/panier' element={<Panier />} />
              <Route path='/paiement' element={<Paiement />} />
            </Routes>
            </div>
            <div className='w-[20%]'><Sidebar /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
