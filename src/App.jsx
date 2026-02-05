import { useState } from "react"
import personas from "./data"
import Compania from "./components/Compania"

function App() {

  // Estado con la lista de empleados
  const [empleados, setEmpleados] = useState(personas)

  // Elimino un empleado usando su id
  const despedirEmpleado = (id) => {
    setEmpleados(empleados.filter(persona => persona.id !== id))
  }

  return (
    <Compania empleados={empleados} despedirEmpleado={despedirEmpleado} />
  )
}

export default App
