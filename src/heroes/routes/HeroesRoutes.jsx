import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { DcPage, HeroesByIdPage, MarvelPage, SearchPage } from '../pages'
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
            <Route path='/hero/:heroId' element={<HeroesByIdPage />}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/*' element={<Navigate to={"/marvel"}/>}/>
        </Routes>
        </div>
    </>
  )
}
