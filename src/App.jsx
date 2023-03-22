
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Carousel } from './components/idriss/Carousel'
import { Panier } from './components/idriss/Panier'
import { Produits } from './components/idriss/Produits'
import { Sidebar } from './components/idriss/Sidebar'
import { LayoutMain } from './components/LayoutMain'
import { Bonbons } from './components/victor/Bonbons'
import { Chips } from './components/victor/Chips'
import { Chocolats } from './components/victor/Chocolats'
import { SelectedItem } from './components/victor/SelectedItem'
import { Soda } from './components/victor/Soda'

function App() {


  return (
    <div className="App">

      <div className='flex justify-center'>
        <div className='w-[85%]'>
          <LayoutMain />
          <div className=' gap-[5%] flex'>
            <div className='w-[75%]'><Carousel /><Produits /><Panier /></div>
            <div className='w-[20%]'><Sidebar /></div>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route path='bonbons' element={<Bonbons />} />
          <Route path='bonbons/:itemName' element={<SelectedItem />} />
          <Route path='chocolats' element={<Chocolats />} />
          <Route path='chips' element={<Chips />} />
          <Route path='soda' element={<Soda />} />
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
