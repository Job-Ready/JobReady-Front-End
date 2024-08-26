import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './landingpage'
import Home from './home'
import Create from './create'
import Design from './design'
import AboutUs from './aboutus'
import Settings from './settings'
import PageNotFound from './pagenotfound'
import Account from './account'

function RoutesDeclared() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/design" element={<Design />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default RoutesDeclared;
