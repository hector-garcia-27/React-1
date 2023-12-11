import Button from 'react-bootstrap/Button';

function Boton({ color, texto }) {
    return (
        <>
            <Button class="btn" variant={color}>{texto}</Button>
        </>
    )
}

export default Boton