import React from 'react'
import {Link} from 'react-router-dom'

// import our MainNavigation.module.css file here
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
  return (
    <header className={classes.header}>
            <div className={classes.logo}>React Basics</div>
            <nav>
                <ul>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/simple-card'>Card</Link></li>
                    <li><Link to='/button'>Button</Link></li>
                    <li><Link to='/carousel'>Carousel</Link></li>
                    <li><Link to='/simple-form'>Form</Link></li>
                    <li><Link to='/menu-bar'>Mega_Menu</Link></li>
                    <li><Link to='/data-table'>Table</Link></li>
                    <li><Link to='/frozen-column'>Frozen Column</Link></li>
                    <li><Link to='/frozen-row'>Frozen Row</Link></li>
                    <li><Link to='/sub-header'>Sub_Header</Link></li>
                    <li><Link to='/table-task'>DataTable_Task</Link></li>
                </ul>
            </nav>
        </header>
  )
}

export default MainNavigation