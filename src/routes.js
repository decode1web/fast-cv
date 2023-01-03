import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainCv } from './components/CV/Main'
import { Main } from './components/Main/Main'
import { Navbar } from './components/Navbar/Navbar'

export const useRoutes = () => {
    if(document.location.pathname === '/cv-page'){
        return (
            <Routes>
                <Route path='/cv-page' element={<MainCv />} />
                <Route path='*' element={<Main />} />
            </Routes>
        )
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='*' element={<Main />} />
            </Routes>
        </>
    )
}