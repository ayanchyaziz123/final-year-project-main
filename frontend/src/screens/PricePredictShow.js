import React, { useState } from 'react';
import PricePredict from './PricePredict';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/predict";

function PricePredictShow(props) {

    const [state, setstate] = useState(props)
    const [post, setPost] = React.useState(null);


    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    console.log("Post : ",post)
    
    return(
        <div>
            <h1>Brand Name {props.value}</h1>
            <h2>Brand : {props.location.state.data.brand_name}</h2>
            <h3>RAM : {props.location.state.data.ram}</h3>
            <h3>ROM : {props.location.state.data.rom}</h3>
            <h3>CAMERA : {props.location.state.data.camera}</h3>
            <h1>Predicted Price :  &#36; {post}</h1>
        </div>
        
    )
}
export default PricePredictShow;