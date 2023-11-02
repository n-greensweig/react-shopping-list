import FoodItem from "../FoodItem/FoodItem";
import { Grid } from "@mui/material";
function FoodList(props) {

    return (
        <>
            <h1>Food Items</h1>
            <Grid container spacing={2}>
                {
                    props.itemList.map(item => <FoodItem id={item.id} getItemList={props.getItemList} name={item.name} quantity={item.quantity} unit={item.unit} purchased={item.purchased} />)
                }
            </Grid>
        </>
    )

}

export default FoodList;