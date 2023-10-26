import axios from 'axios';
import swal from "sweetalert";

function Clear(props) {

    const clearStatus = () => {

        swal({
            title: "Are you sure?",
            text: "This will clear your entire list.",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {

            if (willDelete) {

                axios.delete(`/item`)
                .then(response => {
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

    return <button onClick={clearStatus} id='clear-button'>Clear</button>;

};



export default Clear;