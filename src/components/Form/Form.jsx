function Form() {
    return (
        <form id="input">
            Item: <input className="user-input" type="text" required /><br></br>
            Quantity: <input className="user-input" type="number" required /><br></br>
            Unit: <input className="user-input" type="text" required /><br></br>
            <button id="save-button" type="submit">Save</button>
        </form>
    );
}

export default Form;