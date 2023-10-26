import axios from "axios";
import { response } from "express";


function Remove() {

    const clickHandler = () => {

        axios.delete('/item:id')
            .then(response => {
                
            })

    }

}