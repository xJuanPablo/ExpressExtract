import React from 'react'
import './App.css';
import Hero from './components/Hero';
import Demo from './components/Demo';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <main>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <div className='app'>
          <Hero />
          <Demo />
        </div>
      </main>
    </ThemeContextProvider>
  )
}

export default App