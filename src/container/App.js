import React from 'react'
import Header from '../Components/header'
import Home from '../Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../container/App.module.css'

const App = () => {
    return(
        <div className={classes.App}>
            <Header/>
            <Home/>
        </div>
    )
}

export default App