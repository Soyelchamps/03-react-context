import { useSongContext } from '../../context/SongContext'

import React from 'react'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <>
      {
      context.selectedSong.title
        ? <div>
          <img src={`https://picsum.photos/seed/${context.selectedSong.id}/200/300`} alr='imagen' />
          <h1>{context.selectedSong.title}</h1>
          <h4>{context.selectedSong.artist}</h4>
          <h6>{context.selectedSong.year}</h6>
          </div>
        : <h1>Selecciona una cancion </h1>
    }

    </>
  )
}

export default SongDetails
