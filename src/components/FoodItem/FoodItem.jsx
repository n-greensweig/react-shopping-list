function FoodItem(props) {

    console.log(props);

    return (
        <li>{props.item.name}</li>
    )

}

export default FoodItem;