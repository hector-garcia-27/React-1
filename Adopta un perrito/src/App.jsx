import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MyCard from './components/Mycard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header titulo="Adopta un perrito" />
      <div className='tarjetas'>
        <MyCard texto="Adoptar" color="success" nombre="Trina" descripcion="Cachorra de 3 meses, raza pequeña, pelo corto " url="https://purina.cl/sites/default/files/styles/webp/public/2022-10/mascotas-en-adopcion-beneficios-y-requisitos-para-adoptar-un-perro-o-gato.png.webp?itok=5_umwKrG" />
        <MyCard texto="Adoptar" color="primary" nombre="Mister Dog" descripcion="Cachorro de 4 meses, raza mediana, pelo liso" url="https://araucanianoticias.cl/wp-content/uploads/2023/02/shutterstock-587562362.jpg" />
        <MyCard texto="Adoptar" color="danger" nombre="Canelo" descripcion="Adulto de 3 años, raza mediana, pelo corto" url="https://static.guiaongs.org/wp-content/uploads/2016/07/Adopta.jpg" />
        <MyCard texto="Adoptar" color="warning" nombre="Loki" descripcion="adulto de 5 años, raza mediana, pelaje mediano" url="https://resources.uss.cl/upload/2022/05/beneficios-adoptar-a-un-perro.jpg" />
      </div>
      <Footer />
    </>
  )
}

export default App
