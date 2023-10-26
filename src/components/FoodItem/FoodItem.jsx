function FoodItem(props) {

    return (
        <li>{props.quantity} {props.unit} of {props.name}</li>
    )

}

export default FoodItem;