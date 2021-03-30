import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import logoImg from './assets/images/logo.svg'
import './styles/pages/landing.css'

const App = () => {
  return (
    <main className='page-landing'>
      <div className='content-wrapper'>
        <img src={logoImg} alt='Happy' />
        <div className='title-container'>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </div>
        <div className='location'>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>
        <a className='enter-app'>
          <FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
        </a>
      </div>
    </main>
  )
}

export { App }
