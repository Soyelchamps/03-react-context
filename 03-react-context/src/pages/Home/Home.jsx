import SongList from '@/componets/SongList.jsx'
import SongDetails from '@/componets/SongDetails'
import { SongProvider } from '@/context/SongContext.jsx'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Lado Izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>Lado Derecho</h2>
          <SongDetails />
        </div>
      </SongProvider>
    </div>
  )
}

export default Home
