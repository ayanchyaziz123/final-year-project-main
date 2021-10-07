import React, { useState } from 'react';
import PricePredict from './PricePredict';

function PricePredictShow(props) {

    const [state, setstate] = useState(props)
    console.log(state, props);
    console.log(props.value)
    const ans = props.value
    console.log(ans)
    
    return(
        <div>
            <h1>Brand Name {props.value}</h1>
            <h2>Brand : {props.location.state.data.brand_name}</h2>
            <h3>RAM : {props.location.state.data.ram}</h3>
            <h3>ROM : {props.location.state.data.rom}</h3>
            <h3>CAMERA : {props.location.state.data.camera}</h3>
            <h1>Predicted Price :  &#36;{props.location.state.value}</h1>
        </div>
        
    )
}
export default PricePredictShow;