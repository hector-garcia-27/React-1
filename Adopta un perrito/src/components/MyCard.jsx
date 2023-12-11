import Boton from "./Tags"

function MyCard({ url, nombre, descripcion, color, texto }) {
    return (
        <div class="card">
            <div class="imagen">
                <img src={url} alt="Foto del Perrito" />
            </div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <Boton color={color} texto={texto} />
        </div>
    )
}

export default MyCard