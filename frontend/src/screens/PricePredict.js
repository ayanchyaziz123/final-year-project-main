import React, { useState } from 'react';
import PricePredictShow from './PricePredictShow';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import axios from "axios";


const baseURL = "http://127.0.0.1:8000/api/predict/";

function PricePredict(){
    
    var [isTrue, setTrue] = useState(false);
    const [post, setPost] = React.useState(null);
    const [carName, setCarName] = React.useState([]);
    const [datas, setDatas] = useState(
        {
            car_name: "",
            company: "",
            year: "",
            kms_driven: "",
            fuel_type: "",
            price: "",


        }
    );

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCarName(response.data);
        });
    }, []);


const handleChange = e => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }
const handleSubmit = (event) => {
        event.preventDefault();
        if(datas.car_name == "" || datas.company == "" || datas.year == "" || datas.kms_driven == "")
        {
            window.alert("You Did not fill all informations")
            setTrue(false);
        }
        else{
            setTrue(true);
            axios.post(baseURL, {
                datas
                })
                .then((response) => {
                    setPost(response.data);
                });
        }

    }


if (isTrue){ 
    
        return(
                <div>
                    <h1>Hello world {post}</h1>
                    {carName[0]}
                </div>
       
    )
    }
    else{
    console.log(isTrue);
    return (
        <form onSubmit={handleSubmit}>
            <label for="exampleFormControlSelect1">Car Name</label>
            <select class="form-control" id="exampleFormControlSelect1" name="car_name" onChange={handleChange} >
                <option value="">none</option>
                {carName.map((carName) => (
                    <option value="{carName}">{carName}</option>
                ))}
                <option value="honda">Hyundai Santro Xing XO eRLX Euro III</option>
                <option value="rools">Mahindra Jeep CL550 MDI</option>
                <option value="ford">Ford EcoSport Titanium 1.5L TDCi</option>
            </select>
            <label for="exampleFormControlSelect1">Company Name</label>
            <select class="form-control" id="exampleFormControlSelect1" name="company" onChange={handleChange} >
                <option value="">none</option>
                <option value="honda">	Hyundai</option>
                <option value="rools">Mahindra</option>
                <option value="ford">Maruti</option>
            </select>
            <label for="exampleFormControlSelect1">Year</label>
            <select class="form-control" id="exampleFormControlSelect1" name="year" onChange={handleChange} >
                <option value="">none</option>
                <option value="2">2007</option>
                <option value="4">2008</option>
                <option value="6">2009</option>
                <option value="8">2010</option>
            </select>
            <label for="exampleFormControlSelect1">	kms_driven</label>
            <select class="form-control" id="exampleFormControlSelect1" name="kms_driven" onChange={handleChange}>
                <option value="">none</option>
                <option value="16">45,000 kms</option>
                <option value="32">	22,000 kms</option>
                <option value="64">40 kmps</option>
                <option value="128">80 kmps</option>
            </select>
            <label for="exampleFormControlSelect1"  >fuel_type</label>
            <select class="form-control" id="exampleFormControlSelect1" name="	fuel_type" onChange={handleChange}>
                <option value="">none</option>
                <option value="10">Petrol</option>
                <option value="20">Disel</option>
            </select>
            <br></br>
            <button className="btn btn-dark" type="submit">Predict</button>
        </form>
    )
    }
}
export default PricePredict;