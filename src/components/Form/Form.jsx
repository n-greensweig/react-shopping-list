// import axios from "axios";
// import { useState } from "react";

// function Form(props) {

//     const [newItem, setNewItem] = useState('');
//     const [newQuantity, setNewQuantity] = useState('');
//     const [newUnit, setNewUnit] = useState('');

//     const addItem = (event) => {

//         event.preventDefault();

//         axios.post('/item', {
//             item: newItem,
//             quantity: newQuantity,
//             unit: newUnit,
//         }).then(response => {

//             // Clear our inputs
//             setNewItem('');
//             setNewQuantity('');
//             setNewUnit('');

//             props.getItemList();

//         }).catch(error => {
//             console.error(error);
//             alert('Error adding item.');
//         });

//     };



//     return (
//         <form onSubmit={addItem} id="input">
//             Item: <input className="user-input" type="text" onChange={e => setNewItem(e.target.value)} required /><br></br>
//             Quantity: <input className="user-input" type="text" onChange={e => setNewQuantity(e.target.value)} required /><br></br>
//             Unit: <input className="user-input" type="text" onChange={e => setNewUnit(e.target.value)} required /><br></br>
//             <button id="save-button" type="submit">Save</button>
//         </form>
//     );
// }

// export default Form;






















import axios from "axios";
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function Form(props) {

    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    const addItem = (event) => {

        console.log('hello');
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
        // <form onSubmit={addItem} id="input">
        //     Item: <input className="user-input" type="text" onChange={e => setNewItem(e.target.value)} required /><br></br>
        //     Quantity: <input className="user-input" type="text" onChange={e => setNewQuantity(e.target.value)} required /><br></br>
        //     Unit: <input className="user-input" type="text" onChange={e => setNewUnit(e.target.value)} required /><br></br>
        //     <button id="save-button" type="submit">Save</button>
        // </form>





        <form onSubmit={addItem} id="input">
            <div className='flex'>

                <FormControl variant='outlined' fullWidth sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '25px', marginRight: '2rem'}}>
                    {/* first input field */}
                    <TextField 
                        className='user-input'
                        type='text'
                        label='Item'
                        variant='outlined'
                        onChange={e => setNewItem(e.target.value)} required />
                </FormControl>

                <FormControl variant='outlined' fullWidth sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '25px', marginRight: '2rem'}}>
                    {/* second input field */}
                    <TextField 
                        className='user-input'
                        type='text'
                        label='Quantity'
                        variant='outlined'
                        onChange={e => setNewQuantity(e.target.value)} required />
                </FormControl>

                <FormControl variant='outlined' fullWidth sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '25px', marginRight: '2rem'}}>
                    {/* third input field */}
                    <TextField 
                        className='user-input'
                        type='text'
                        label='Unit'
                        variant='outlined'
                        onChange={e => setNewUnit(e.target.value)} required />
                </FormControl>

                <Button onClick={addItem} variant="contained"> Save </Button>

        

            </div>
        </form>
    );
}

export default Form;