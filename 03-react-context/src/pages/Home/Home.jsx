import SongList from '@/componets/SongList.jsx'
import SongDetails from '@/componets/SongDetails'
import { SongProvider } from '@/context/SongContext.jsx'
import Header from '../../componets/Header'

const Home = () => {
  return (
    <>
      <SongProvider>
        <Header />
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
      </SongProvider>
    </>
  )
}

export default Home
