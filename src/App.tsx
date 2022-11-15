import './App.css'
import ButtonComp from './components/ButtonComp'
import CardComponent from './components/CardComponent'
import CarouselComp from './components/CarouselComp'

function App() {  
  return (
    <div>
      <h2 className='bg-blue-400 text-white p-2 m-0 py-3'>Prime React Basics</h2>
      <CardComponent/>
      <ButtonComp/>
      <CarouselComp/>
    </div>
  )
}

export default App
