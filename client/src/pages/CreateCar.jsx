import React, { useState } from 'react'
import '../App.css'

const CreateCar = () => {

    const [item, setItem] = useState({
        id: 0,
        name: '',
        color: 'option 1',
        engine: 'option 1',
        package_: 'option 1',
        wheels: 'option 1',
        interior: 'option 1',
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setItem( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const createItem = (event) => {
        event.preventDefault()
        console.log(item)
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }

        fetch('http://localhost:3000/items', options)
        window.location = '/'
    }

    return (
    <div className='CreateItem'>
    <center><h2>Create a Car</h2></center>
    <form>
        <label>Name</label><br />
            <input type='text' id='name' name='name' value={item.name} onChange={handleChange} /><br />
            <br/>

        <label>Color</label><br />
        <select id='color' name='color' value={item.color} onChange={handleChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
        </select><br />
        <br/>

        <label>Engine</label><br />
        <select id='engine' name='engine' value={item.engine} onChange={handleChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
        </select><br />
        <br/>

        <label>Package</label><br />
        <select id='package_' name='package_' value={item.package_} onChange={handleChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
        </select><br />
        <br/>

        <label>Wheels</label><br />
        <select id='wheels' name='wheels' value={item.wheels} onChange={handleChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
        </select><br />
        <br/>

        <label>Interior</label><br />
        <select id='interior' name='interior' value={item.interior} onChange={handleChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
        </select><br />
        <br/>

        <input type='submit' value='Submit' onClick={createItem} />
        </form>
    </div>
    )
}

export default CreateCar