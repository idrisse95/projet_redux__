
import './App.scss'
import { Carousel } from './components/idriss/Carousel'
import { Produits } from './components/idriss/Produits'
import { Sidebar } from './components/idriss/Sidebar'

function App() {


  return (
    <div className="App">
    
     <div className='flex justify-center'>
       <div className='w-[85%] gap-[5%] flex'>
       <div className='w-[75%]'><Carousel/><Produits/></div>
       <div className='w-[20%]'><Sidebar/></div>
       </div>
     </div>
    </div>
  )
}

export default App
