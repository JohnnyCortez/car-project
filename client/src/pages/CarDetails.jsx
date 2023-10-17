import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import '../App.css'

const CarDetails = () => {
    const {id} = useParams()
    console.log(id)
    const [item, setItem] = useState({
        id: 0,
        name: '',
        color: '',
        engine: '',
        package_: '',
        wheels: '',
        interior: '',
    })

    useEffect(() => {
        const fetchGiftById = async () => {
            try {
                const response = await fetch(`http://localhost:3000/items/${id}`); // Use template literals
                if (response.status === 409) {
                    console.error('Conflict: The requested item conflicts with the current state of the resource.');
                    // Handle the conflict error as needed
                } else if (response.ok) {
                    const data = await response.json();
                    setItem(data);
                } else {
                    console.error('Failed to fetch the item with ID:', id);
                    // Handle other error cases here
                }
            } catch (error) {
                console.error('An error occurred:', error);
                // Handle any network or other errors here
            }
        };
    
        fetchGiftById();
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault()

        const options = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3000/items/${id}`, options)
        window.location = '/'
    }
    
    return (
        <div>
            <h1>Car Details</h1>
            <p>{item.name}</p>
            <p>{item.color}</p>
            <p>{item.engine}</p>
            <p>{item.package_}</p>
            <p>{item.wheels}</p>
            <p>{item.interior}</p>
            <Link to={`/edit/${id}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CarDetails