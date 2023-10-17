import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../App.css'

const EditCar = () => {
    const {id} = useParams()
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
        const fetchItemById = async () => {
            const response = await fetch(`http://localhost:3000/items/${id}`)
            const data = await response.json()
            setItem(data)
        }

        fetchItemById()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setItem((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateItem = (event) => {
        event.preventDefault()

        const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }

        fetch(`http://localhost:3000/items/${id}`, options)
        window.location = '/'
    }

    return (
        <div>
            <h1>Edit Car</h1>
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

                <button type="submit" value="submit" onClick={updateItem}>Submit</button>
            </form>
        </div>
    )
}

export default EditCar