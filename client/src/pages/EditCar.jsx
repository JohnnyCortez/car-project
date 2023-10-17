import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const EditCar = () => {
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
        const fetchItemById = async () => {
            const response = await fetch(`http://localhost:3000/items/${id}`);
            const data = await response.json();
            setItem(data);
        };

        fetchItemById();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setItem((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const updateItem = (event) => {
        event.preventDefault();

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        };

        fetch(`http://localhost:3000/items/${id}`, options);
        window.location = '/';
    };

    return (
        <div className='CreateItem'>
            <center><h2>Edit Car</h2></center>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type='text' id='name' name='name' value={item.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <select id='color' name='color' value={item.color} onChange={handleChange}>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Engine</label>
                    <select id='engine' name='engine' value={item.engine} onChange={handleChange}>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Package</label>
                    <select id='package_' name='package_' value={item.package_} onChange={handleChange}>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Wheels</label>
                    <select id='wheels' name='wheels' value={item.wheels} onChange={handleChange}>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Interior</label>
                    <select id='interior' name='interior' value={item.interior} onChange={handleChange}>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type='submit' value='Submit' onClick={updateItem} />
                </div>
            </form>
        </div>
    );
}

export default EditCar;
