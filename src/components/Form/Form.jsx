import axios from "axios";
import { useState } from "react";

function Form(props) {

    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    const addItem = (event) => {

        event.preventDefault();

        axios.post('/item', {
            item: newItem,
            quantity: newQuantity,
            unit: newUnit,
        }).then(response => {


            // Clear our inputs
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');

            props.getItemList();

        }).catch(error => {
            console.error(error);
            alert('Error adding item.');
        });

    };



    return (
        <form onSubmit={addItem} id="input">
            Item: <input className="user-input" type="text" onChange={e => setNewItem(e.target.value)} required /><br></br>
            Quantity: <input className="user-input" type="text" onChange={e => setNewQuantity(e.target.value)} required /><br></br>
            Unit: <input className="user-input" type="text" onChange={e => setNewUnit(e.target.value)} required /><br></br>
            <button id="save-button" type="submit">Save</button>
        </form>
    );
}

export default Form;