const Empleado = ({ persona, despedirEmpleado }) => {
    const { id, name, age, image } = persona

    return (
        <article className="person">
            <img src={image} alt={name} />

            <div>
                <h4>{name}</h4>
                <p>{age} años</p>
            </div>

            <button
                className="icon-btn delete"
                title="Despedir empleado"
                onClick={() => despedirEmpleado(id)}
            >
                ✖
            </button>
        </article>
    )
}

export default Empleado

