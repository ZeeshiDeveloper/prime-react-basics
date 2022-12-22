import './App.css'
import BasicDataTable from './components/BasicDataTable'
import ButtonComp from './components/ButtonComp'
import CardComponent from './components/CardComponent'
import CarouselComp from './components/CarouselComp'
import FormComp from './components/FormComp'
import FrozenColumnDataTable from './components/FrozenColumnDataTable'
import FrozenRows from './components/FrozenRows'
import LoginForm from './components/LoginForm'
import MenuBarComp from './components/MenuBarComp'
import SimpleTableTask from './components/SimpleTableTask'
import SubheaderGrouping from './components/SubheaderGrouping'
function App() {  
  return (
    <div>
      <h2 className='bg-blue-400 text-white p-2 m-0 py-3'>Prime React Basics</h2>
      <CardComponent/>
      <ButtonComp/>
      <CarouselComp/>
      <FormComp/>
      <MenuBarComp/>
      <BasicDataTable/>
      <FrozenColumnDataTable/>
      <FrozenRows/>
      <SubheaderGrouping/>
      <SimpleTableTask/>
      <LoginForm/>  
      
    </div>
  )
}

export default App
