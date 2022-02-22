
export const obtenerTodo = async(url,setSiguiente, setAnterior, setTotal, setPersonajes) => {
    const peticion = await fetch(url)
    const {count,next,previous, results} = await peticion.json()
    setSiguiente(next)
    previous != null ? setAnterior(previous) : setAnterior(null)
    setTotal(count)
    setPersonajes(results)
    
}

export const obtenerPersonaje = async(id, setPersonaje) => {
    const peticion =  await fetch(`${id}`)
    const resultado = await peticion.json()
    setPersonaje(resultado)
}

export const obtenerHabilidad = async(id, setHabilidad) => {
    const peticion =  await fetch(`https://pokeapi.co/api/v2/ability/${id}`)
    const resultado = await peticion.json()
    const habilidad = resultado.flavor_text_entries[13]
    setHabilidad(habilidad)
}


