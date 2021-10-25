import React, {useState} from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
const PriceRangeScreen = () =>{
    const [value, setValue] = useState(50);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <RangeSlider
            value={value}
            onChange={rangeSelector}
        />
    );

}

export default PriceRangeScreen;