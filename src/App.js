import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import AppRoute from './route/AppRoute';

function App() {
  return (
    // <Fragment>
        //     <Router>
        //         <AppRoute/>
        //     </Router>
        // </Fragment>

        <Fragment>
        
                 <AppRoute/>
        
        </Fragment>
  )
}

export default App