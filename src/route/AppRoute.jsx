import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';


function AppRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  )
}

export default AppRoute