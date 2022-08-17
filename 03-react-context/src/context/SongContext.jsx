import { useEffect, useState, createContext, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales de React,
// Es decir poder compartir LA MISMA informacion entre diferentes nieveles de componentes
// Para usar Context necesitamos seguir una seire de pasos

// #1 Creación de mi contexto vacío
const SongContext = createContext()

// #2 Creación del proveedor del contexto
// Es decir, maneja de donde se obtiene y como se pasa la infomación
function SongProvider (props) {
  const [list, setList] = useState([])
  const [selectedSong, setSelectedSong] = useState({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // simulamos llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading,
    search,
    setSearch
  }
  return (
    <SongContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brindar acceso a la data global de mi contexto
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4 Exportat las funciones del Provider
export {
  SongProvider,
  useSongContext
}
