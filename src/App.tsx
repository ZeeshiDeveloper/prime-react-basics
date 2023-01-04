import './App.css'
// Routing
import { Route,Routes } from 'react-router-dom';

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
import SignUpPage from './components/SignUpPage'
import Layout from './components/layouts/Layout'
import ResetPassword from './components/ResetPassword';
function App() {  
  return (
    <div>
        <Layout>
          <Routes>
            <Route path='/' element={<LoginForm /> } />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/forget-password' element={<ResetPassword />} />
            <Route path='/simple-card' element={<CardComponent /> } />
            <Route path='/button' element={<ButtonComp /> } />
            <Route path='/carousel' element={<CarouselComp /> } />
            <Route path='/simple-form' element={<FormComp /> } />
            <Route path='/menu-bar' element={<MenuBarComp /> } />
            <Route path='/data-table' element={<BasicDataTable /> } />
            <Route path='/frozen-column' element={<FrozenColumnDataTable /> } />
            <Route path='/frozen-row' element={<FrozenRows /> } />
            <Route path='/sub-header' element={<SubheaderGrouping /> } />
            <Route path='/table-task' element={<SimpleTableTask /> } />
          </Routes>
        </Layout>
      
    </div>
  )
}

export default App
