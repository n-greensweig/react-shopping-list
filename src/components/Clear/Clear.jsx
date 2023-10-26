import axios from 'axios';
import swal from "sweetalert";

function Clear(props) {

    swal

    const clickHandler = () => {
      axios.delete(`/item`).then((response) => {
        props.getItemList();
    }).catch((error) => {
        console.error(error);
        alert('something went wrong');
    })
};

    return <button onClick={clickHandler} id='clear-button'>Clear</button>;
};

export default Clear;