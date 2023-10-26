import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx'
import Clear from '../Clear/Clear.jsx'
import Reset from '../Reset/Reset.jsx'
import FoodItem from '../FoodItem/FoodItem.jsx';
import FoodList from '../FoodList/FoodList.jsx';
import './App.css';

function App() {

    const [itemList, setItemList] = useState([]);

    const getItemList = () => {

        axios.get('/item').then((response) => {
            console.log(response.data);
            setItemList(response.data);
        }).catch((error) => {
            console.log('Error in getItemList: ', error);
            alert('Something went wrong!');
        });

    };
    
    useEffect(() => {
        getItemList();
    }, []);

    console.log(itemList);



    return (
        <div className="App">
            <Header />
            <main>
                <p>Add an Item</p>
                <Form getItemList={getItemList} />
                <Reset />
                <Clear getItemList={getItemList} />
                <FoodList itemList={itemList} />
            </main>
        </div>
    );
}

export default App;

