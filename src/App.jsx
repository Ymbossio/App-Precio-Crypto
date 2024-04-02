import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './Table'


function App() {
  const [money, setMoney] = useState([])
  const [buscar, setBuscar] = useState('');

  const api = () =>{
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false')
  .then(response => response.json())
  .then(data =>{ setMoney(data)})
  }

  useEffect(() => {
    api();
  }, [])

  return (
    <>
    <div className='container'>
      <div className='row'>
        <input  type='text' placeholder='Buscar Moneda' className='form-control text-dark border-0 mt-4 text-center' value={buscar} onChange={(e) =>{setBuscar(e.target.value)}}/>
        <Table buscar={buscar} money={money} />
      </div>
    </div>

   
    </>
  )
}

export default App;
