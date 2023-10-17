// CarDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const CarDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({
        id: 0,
        name: '',
        color: '',
        engine: '',
        package_: '',
        wheels: '',
        interior: '',
    });

    useEffect(() => {
        const fetchGiftById = async () => {
            try {
                const response = await fetch(`http://localhost:3000/items/${id}`);
                if (response.status === 409) {
                    console.error('Conflict: The requested item conflicts with the current state of the resource.');
                } else if (response.ok) {
                    const data = await response.json();
                    setItem(data);
                } else {
                    console.error('Failed to fetch the item with ID:', id);
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchGiftById();
    }, [id]);

    const handleDelete = async (event) => {
        event.preventDefault();

        const options = {
            method: 'DELETE',
        };

        await fetch(`http://localhost:3000/items/${id}`, options);
        window.location = '/';
    };

    return (
        <div className="car-details-container">
            <h1 className="car-details-title">Car Details</h1>
            <div className="car-details">
                <p className="car-detail"><strong>Name:</strong> {item.name}</p>
                <p className="car-detail"><strong>Color:</strong> {item.color}</p>
                <p className="car-detail"><strong>Engine:</strong> {item.engine}</p>
                <p className="car-detail"><strong>Package:</strong> {item.package_}</p>
                <p className="car-detail"><strong>Wheels:</strong> {item.wheels}</p>
                <p className="car-detail"><strong>Interior:</strong> {item.interior}</p>
            </div>
            <Link to={`/edit/${id}`} className="edit-link">Edit</Link>
            <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
    );
};

export default CarDetails;
