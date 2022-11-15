import './App.css'
import ButtonComp from './components/ButtonComp'
import CardComponent from './components/CardComponent'

function App() {  
  return (
    <div>
      <h2 className='bg-blue-400 text-white p-2 m-0 py-3'>Prime React Basics</h2>
      <CardComponent/>
      <ButtonComp/>
    </div>
  )
}

export default App
