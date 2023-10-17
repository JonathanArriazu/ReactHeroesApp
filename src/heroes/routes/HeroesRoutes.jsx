import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { DcPage, MarvelPage } from '../pages'
import { Navbar } from '../../ui'
import { Navigate } from 'react-router-dom'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
        <Routes>

            <Route path='/marvel' element={<MarvelPage />}/>
            <Route path='/dc' element={<DcPage />}/>
            { /* Search Route */ }
            { /* HeroById Route */ }
            <Route path='/*' element={<Navigate to={"/marvel"}/>}/>
        </Routes>
        </div>
    </>
  )
}
