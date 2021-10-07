import React, { useState } from 'react';
import PricePredictShow from './PricePredictShow';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function PricePredict(){
    
    var [isTrue, setTrue] = useState(false);
    const [data, setData] = useState(
        {
            brand_name: "",
            ram: "",
            rom: "",
            camera: ""
        }

    );
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data.brand_name)
        console.log(data.ram)
        console.log(data.rom)
        console.log(data.camera)
         
        if(data.brand_name == "")
        {
            setTrue(false);
        }
        else{
            setTrue(true);
        }
        console.log(isTrue);
    }
    if (isTrue){ 
        const ans = 20;
        return(
                <Redirect to={{
                    pathname: '/predict',
                    state: {data:data,
                            value:ans}
                
                }}
                />
       
    )
    }
    else{
    console.log(isTrue);
    return (
        <form onSubmit={handleSubmit}>
            <label for="exampleFormControlSelect1">Brand Name</label>
            <select class="form-control" id="exampleFormControlSelect1" name="brand_name" onChange={handleChange} >
                <option value="iphone">Iphone</option>
                <option value="samsung">Samsung</option>
                <option value="oppo">Oppo</option>
            </select>
            <label for="exampleFormControlSelect1">RAM</label>
            <select class="form-control" id="exampleFormControlSelect1" name="ram" onChange={handleChange} >
                <option value="2">2gb</option>
                <option value="4">4gb</option>
                <option value="6">6gb</option>
                <option value="8">8gb</option>
                <option value="10">10gb</option>
            </select>
            <label for="exampleFormControlSelect1">ROM</label>
            <select class="form-control" id="exampleFormControlSelect1" name="rom" onChange={handleChange}>
                <option value="16">16gb</option>
                <option value="32">32gb</option>
                <option value="64">64gb</option>
                <option value="128">128gb</option>
            </select>
            <label for="exampleFormControlSelect1"  >Camera</label>
            <select class="form-control" id="exampleFormControlSelect1" name="camera" onChange={handleChange}>
                <option value="10">10px</option>
                <option value="20">20px</option>
                <option value="30">30px</option>
                <option value="40">40px</option>
                <option value="50">50px</option>
            </select>
            <br></br>
            <button className="btn btn-dark" type="submit">Predict</button>
        </form>
    )
    }
}
export default PricePredict;