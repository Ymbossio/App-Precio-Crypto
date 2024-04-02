import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Table = ({money, buscar}) => {

   const Filtro =  money.filter((i) => 
   i.name.toLowerCase().includes(buscar.toLowerCase()) ||
   i.symbol.toLowerCase().includes(buscar.toLowerCase())
   
   )
   
  return (
    <>
        <table className='table table-striped mt-4 table-hover'>
            <thead>
                <tr>
                    <td>N°</td>
                    <td>Coin</td>
                    <td>Prince</td>
                    <td>Prince Change</td>
                    <td>24 Volume</td>
                </tr>

            </thead>
            <tbody>
                {Filtro.map((item, index) =>(
                    <tr key={item.atl_change_percentage}> 
                        <td>{index + 1}</td>
                        <td> 
                            <img src={item.image} alt="imagen moneda" style={{width: '3%'}} className='me-4 img-fluid'/>
                            <span>{item.name}</span>
                            <span className='ms-3 text-muted text-uppercase'>{item.symbol}</span>
                        </td>
                        <td>{item.current_price}</td>
                        <td className={item.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{item.price_change_percentage_24h}</td>
                        <td>{item.total_volume}</td>
                    </tr>
                ))}

            </tbody>
            
        </table>
    </>
  )
}
