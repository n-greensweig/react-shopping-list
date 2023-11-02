import axios from "axios";
import swal from "sweetalert";
import Button from '@mui/material/Button';

function Reset(props) {

    const resetPurchaseStatus = () => {

        swal({
            title: "Are you sure?",
            text: "Resetting will set all items in your list to unpurchased",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {

            if (willDelete) {

                axios.put('/item')
                    .then(response => {
                        props.getItemList();

                        swal("Voila! Your items have been updated!", {
                            icon: "success",
                        });

                    })
                    .catch(error => {
                        console.error(error);
                        alert('Something went wrong.')
                    });

            } else {
                swal('Your items remain as they were.');
            }

        });


    };

    // return <button onClick={resetPurchaseStatus}>Reset</button>
    return <Button onClick={resetPurchaseStatus} color="secondary">Reset</Button>
    

}


export default Reset;