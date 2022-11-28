import React, { createContext, useState } from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from './components/ContextProvider';


import { app, db } from "./firebase"



export const contexto = createContext()



function App() {
    
    
    
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App
