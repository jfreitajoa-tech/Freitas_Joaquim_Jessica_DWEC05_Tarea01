import Empleado from "./Empleado"

const Compania = ({ empleados, despedirEmpleado }) => {
    return (
        <main>
            <section className="container">
                <h3>
                    Actualmente hay {empleados.length} trabajadores en la empresa DWEC
                </h3>

                {empleados.map(persona => (
                    <Empleado
                        key={persona.id}
                        persona={persona}
                        despedirEmpleado={despedirEmpleado}
                    />
                ))}
            </section>
        </main>
    )
}

export default Compania
