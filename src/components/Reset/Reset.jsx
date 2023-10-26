import axios from "axios";
function Reset(props) {

    const resetPurchaseStatus = () => {

        axios.put('/item')
            .then(response => {
                props.getItemList();
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.')
            });

    };

    return <button onClick={resetPurchaseStatus}>Reset</button>

}


export default Reset;