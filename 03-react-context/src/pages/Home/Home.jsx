import React from 'react'
import SongList from '../../componets/SongList.jsx'
import SongDetails from '@/componets/SongDetails'
import './home.css'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <SongList />
      </div>
      <div className='derecho'>
        <h2>Lado Derecho</h2>
        <SongDetails />
      </div>
    </div>
  )
}

export default Home
