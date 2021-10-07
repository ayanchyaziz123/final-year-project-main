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
            <h1>Hello {props.location.state.value}</h1>
        </div>
        
    )
}

export default PricePredictShow;