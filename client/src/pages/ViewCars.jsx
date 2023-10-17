import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ViewCars = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:3000/items');
            const data = await response.json();
            setItems(data);
        };

        fetchItems();
    }, []);

    return (
        <div className="view-cars-container">
            <h1>View Cars</h1>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <div key={item.id} className="car-card">
                        <h2 style={{color:"black"}}>{item.name}</h2>
                        <p style={{color:"black"}}>Color: {item.color}</p>
                        <p style={{color:"black"}}>Engine: {item.engine}</p>
                        <p style={{color:"black"}}>Package: {item.package_}</p>
                        <p style={{color:"black"}}>Wheels: {item.wheels}</p>
                        <p style={{color:"black"}}>Interior: {item.interior}</p>

                        <Link to={`/customcars/${item.id}`}>Details</Link>
                    </div>
                ))
            ) : (
                <h3 className="no-results">No Cars Yet 😞</h3>
            )}
        </div>
    );
};

export default ViewCars;