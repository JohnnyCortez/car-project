import React, { useState } from 'react';
import '../App.css';

const CreateCar = () => {
    const [item, setItem] = useState({
        id: 0,
        name: '',
        color: '',
        engine: '',
        package_: '',
        wheels: '',
        interior: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const createItem = (event) => {
        event.preventDefault();
        console.log(item.engine)
        console.log(item.package_)
        if(item.engine == "inline 4" && item.package_ == "Track package"){
            alert("can't select sport package with inline 4 engine")
            return
        }
        else {
        console.log(item);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        };

        fetch('http://localhost:3000/items', options);
        window.location = '/';
        }
    }

    return (
        <div className='CreateItem'>
            <center><h2>Create a Car</h2></center>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type='text' id='name' name='name' value={item.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <select id='color' name='color' value={item.color} onChange={handleChange}>
                        <option value=""></option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Engine</label>
                    <select id='engine' name='engine' value={item.engine} onChange={handleChange}>
                        <option value=""></option>
                        <option value="inline 4">Inline 4</option>
                        <option value="V6 turbo">V6 Turbo</option>
                        <option value="V8 supercharger">V8 Supercharger</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Package</label>
                    <select id='package_' name='package_' value={item.package_} onChange={handleChange}>
                        <option value=""></option>
                        <option value="base model">Base Model</option>
                        <option value="Sport package">Sport Package</option>
                        <option value="Track package">Track Package</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Wheels</label>
                    <select id='wheels' name='wheels' value={item.wheels} onChange={handleChange}>
                        <option value=""></option>
                        <option value="base wheels">Base Wheels</option>
                        <option value="aluminum">Aluminum</option>
                        <option value="carbon fiber">Carbon Fiber</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Interior</label>
                    <select id='interior' name='interior' value={item.interior} onChange={handleChange}>
                        <option value=""></option>
                        <option value="base interior">Base Interior</option>
                        <option value="leather">Leather</option>
                        <option value="sport">Sport</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type='submit' value='Submit' onClick={createItem} />
                </div>
            </form>
        </div>
    )
}

export default CreateCar;
