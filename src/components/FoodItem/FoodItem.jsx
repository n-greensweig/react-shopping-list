import axios from 'axios';
import './FoodItem.css';

function FoodItem(props) {

    console.log(props);
    console.log(props.id);

    const togglePurchased = () => {

        axios.put(`/item/${props.id}`).then((response) => {
            props.getItemList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!');
        });

    };

    const deleteItem = () => {

        axios.delete(`/item/${props.id}`)
            .then(response => {
                props.getItemList();
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong!')
            });

    };

    return (
        <>
            <li>{props.quantity} {props.unit} of {props.name}</li>
            <button onClick={togglePurchased}>{props.purchased ? 'Purchased!' : 'Buy'}</button>
            <button id="delete-button" onClick={deleteItem}>Delete</button>
        </>
    )

}

export default FoodItem;