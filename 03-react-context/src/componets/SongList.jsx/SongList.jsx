import { useSongContext } from '@/context/SongContext'
import './songlist.css'
// Importar la lista de canciones de un JSON
const SongList = () => {
  const context = useSongContext()
  // simulamos llamada a
  return (
    <section>
      {context.loading
        ? <h1>Cargando...</h1>
        : context.list.filter(song => {
          if (context.search === '') {
            return song // Si la busqueda es vacia retorno todas la canciones
          } else if (song.title.toLowerCase().includes(context.search.toLowerCase())) {
            return song // retono la cancion que cumple con el criterio de busqueda
          }
          return null // ninguna cancion coincide
        }).map((song) => (
          <div
            className='row-song'
            key={song.id}
            onClick={() => { context.setSelectedSong(song) }}
          >
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}

export default SongList
