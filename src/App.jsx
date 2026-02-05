import { useState } from "react"
import personas from "./data"
import Compania from "./components/Compania"

function App() {
  
  const [empleados, setEmpleados] = useState(personas)

  const despedirEmpleado = (id) => {
    const nuevosEmpleados = empleados.filter(persona => persona.id !== id)
    setEmpleados(nuevosEmpleados)
  }

  return (
    <Compania empleados={empleados} despedirEmpleado={despedirEmpleado} />
  )
}

export default App
