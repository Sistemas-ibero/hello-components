import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ListaSuper } from './components/ListaSuper'


const PRODUCTOS = [
  { nombre: "Leche", precio: 22.50 },
  { nombre: "Pan integral", precio: 35.00 },
  { nombre: "Huevos (docena)", precio: 40.00 },
  { nombre: "Arroz (1 kg)", precio: 28.00 },
  { nombre: "Frijoles (1 kg)", precio: 30.00 },
  { nombre: "Jugo de naranja", precio: 25.50 },
  { nombre: "Papel higiénico (4 rollos)", precio: 45.00 },
  { nombre: "Pasta de dientes", precio: 23.50 },
  { nombre: "Jabón líquido", precio: 32.00 },
  { nombre: "Zanahorias (1 kg)", precio: 15.00 }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title={'Mi primer componente =B'} color={'cyan'}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <ListaSuper productos={PRODUCTOS} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
