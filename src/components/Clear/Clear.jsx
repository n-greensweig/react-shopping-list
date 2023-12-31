import axios from 'axios';
import swal from "sweetalert";
import Button from '@mui/material/Button';

function Clear(props) {

    const clearStatus = () => {

        swal({
            title: "Are you sure?",
            text: "This will clear your entire list.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {

            if (willDelete) {

                axios.delete(`/item`)
                    .then(response => {
                        swal('Your shopping list has been cleared.', {
                            icon: "success"
                        });
                        props.getItemList();
                    }).catch((error) => {
                        console.error(error);
                        alert('something went wrong');
                    });

            } else {
                swal('Your items remain as they were.');
            }
        });

    };

    return <Button onClick={clearStatus} id='clear-button' variant="outlined" color="error">
  Clear
</Button>;
};



export default Clear;