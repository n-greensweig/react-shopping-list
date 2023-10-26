import FoodItem from "../FoodItem/FoodItem"
function FoodList(props) {

    return (
        <>
            <h1>Food Items</h1>
            <ul>
                {
                    props.itemList.map(item => <FoodItem id={item.id} getItemList={props.getItemList} name={item.name} quantity={item.quantity} unit={item.unit} purchased={item.purchased} />)
                }
            </ul>
        </>
    )

}

export default FoodList;