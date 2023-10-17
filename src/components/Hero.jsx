import React from 'react';
import logo from '../assets/logo.png'
import Toggle from './Toggle';


function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="Express Extract Logo" className='w-36 object-contain'/>
        <div className='flex items-center'>
          <button type='button' onClick={() => window.open('https://github.com/xJuanPablo/ExpressExtract')} className='black_btn mr-4'>
            GitHub
          </button>
          <Toggle/>
        </div>
      </nav>
      <h1 className='head_text'>Sift Through Information In the Blink of an Eye <br />
        <span className='orange_gradient'>OpenAI GPT-4k</span>
      </h1>
      <h2 className='desc'>
      Explore a faster way to grasp information with Express Extract! Our platform transforms lengthy articles into quick, easy-to-read summaries so you can stay informed without being overwhelmed. Experience the efficiency of rapid extraction, making every read a breeze. Say goodbye to information overload and hello to hassle-free understanding. Simplify your reading experience with Express Extract—knowledge made quick and easy!
      </h2>
    </header>
  )
}

export default Hero