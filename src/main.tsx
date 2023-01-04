import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//For Routing (npm i react-router-dom)
import { BrowserRouter } from 'react-router-dom';

// Prime REact Configeration add import files here
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                //icons

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
