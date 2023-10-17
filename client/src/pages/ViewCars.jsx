import React from 'react'
import {useState, useEffect} from 'react'
// import Link from 'react-router-dom'
import '../App.css'

const ViewCars = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
          console.log('test0')
          const response = await fetch('http://localhost:3000/items')
          const data = await response.json()
          console.log(data, 'test1')
          setItems(data)
        }
      
        fetchItems()
        console.log(items, 'test2')
    
      }, []);




    return (
        <div>
            <h1>View Cars</h1>
            {
                items && items.length > 0 ?
                items.map((item) => 
                    
                   <div>
                    <p>{item.name}</p>
                    <p>{item.color}</p>
                    <p>{item.engine}</p>
                    <p>{item.package_}</p>
                    <p>{item.wheels}</p>
                    <p>{item.interior}</p>

                    {/* <Link to={`/customcars/:${item.id}`}>Details</Link> */}
                   </div>

                ) : <h3 className="noResults">{'No Cars Yet 😞'}</h3>
            }
        </div>
    )
}

export default ViewCars