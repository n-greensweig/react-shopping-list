// function FoodItem(props) {

// const togglePurchased = () => {
//     axios.put(`/item/${props.item.id}`).then((response) => {
//         props.getItemList();
//     }).catch((error) => {
//         console.error(error);
//         alert('Something went wrong!');
//     })
// }

//     return (
//         <li>{props.quantity} {props.unit} of {props.name}</li>
//     )

// }

// export default FoodItem;




import axios from 'axios';



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

    return (
        <>
            <li>{props.quantity} {props.unit} of {props.name}</li>
            <button onClick={togglePurchased}>{props.purchased ? 'Purchased' : 'Buy'}</button>
        </>
    )

}

export default FoodItem;