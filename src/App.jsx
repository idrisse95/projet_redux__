
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { LayoutMain } from './components/LayoutMain'
import { Bonbons } from './components/victor/Bonbons'
import { Chips } from './components/victor/Chips'
import { Chocolats } from './components/victor/Chocolats'
import { SelectedItem } from './components/victor/SelectedItem'
import { Soda } from './components/victor/Soda'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route path='bonbons' element={<Bonbons />} />
          <Route path='bonbons/:itemName' element={<SelectedItem />} />
          <Route path='chocolats' element={<Chocolats />} />
          <Route path='chips' element={<Chips />} />
          <Route path='soda' element={<Soda />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
