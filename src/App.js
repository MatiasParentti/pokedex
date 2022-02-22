import { useState, useEffect } from 'react'
import Footer from './Footer'
import { obtenerTodo, obtenerPersonaje } from './funciones'
import Pokemon from './Pokemon'

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10")
  const [siguiente, setSiguiente] = useState(null)
  const [anterior, setAnterior] = useState(null)
  const [total, setTotal] = useState(null)
  const [personajes, setPersonajes] = useState(null)
  const [personaje, setPersonaje] = useState(null)

  const irSiguiente = (url) => {
    setUrl(url)
  }
  const irAnterior = (url) => {
    setUrl(url)
  }

  useEffect(() => {
    obtenerTodo(url, setSiguiente, setAnterior, setTotal, setPersonajes)
  }, [url])

  return (
    <div>
      <div className='contenedor'>
        <div className='header'>
          <h1>Pokemon Api</h1>

          <p className="nes-balloon from-left nes-pointer">
            Total de pokemones <a href="/" className="nes-badge">
              <span className="is-success"> {total}</span>
            </a>
          </p>


          <br></br>
          <i class="nes-pokeball"></i>
          <br></br>
          <br></br>
          {anterior != null ? (
            <button className='nes-btn is-primary' onClick={() => irAnterior(anterior)}>anterior</button>
          ) : ('')}
          {siguiente != null ? (
            <button className='nes-btn is-primary' onClick={() => irSiguiente(siguiente)}>siguiente</button>
          ) : ('')}
          <br></br>

          <div>

            <ul className='nes-list is-circle'>
              {personajes != null ? (
                personajes.map(personaje => (
                  <li key={personaje.name} onClick={() => obtenerPersonaje(personaje.url, setPersonaje)}>{personaje.name}</li>

                ))
              ) : ('')}
            </ul>
          </div>
        </div>

        <div className='personaje'>
          {personaje != null ? (
            <Pokemon poke={personaje}></Pokemon>
          ) : ('')}
        </div>

      </div>
      <br></br>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;