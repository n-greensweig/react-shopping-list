import axios from 'axios';
import './FoodItem.css';
import { Card, CardActions, CardContent, Typography, Paper, Grid, Button } from '@mui/material';
import { Delete, ShoppingCart } from '@mui/icons-material';

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
            <Grid item spacing={3}>
                <Paper elevation={5}>
                    <Card>
                        <CardContent>
                            <Typography>{props.quantity} {props.unit} of {props.name}</Typography>
                            <CardActions>
                                <Button variant='contained' onClick={togglePurchased}>{props.purchased ? 'Purchased!' : 'Buy'}</Button>
                                <Button variant='outlined' id='delete-button' onClick={deleteItem}>Delete</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </>
    )

}

export default FoodItem;