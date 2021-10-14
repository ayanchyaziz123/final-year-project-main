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
    const [f_carName, f_setCarName] = React.useState([]);
    const [f_carCompany, f_setCarCompany] = React.useState([]);
    const [f_carYear, f_setCarYear] = React.useState([]);
    const [f_carFuelType, f_setCarFuelType] = React.useState([]);
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
            f_setCarName(response.data.cn);
            f_setCarCompany(response.data.cc);
            f_setCarYear(response.data.cy);
            console.log(response.data.cn);

        });
    }, []);


const handleChange = e => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }
const handleSubmit = (event) => {
        event.preventDefault();
    if (datas.car_name == "" || datas.company == "" || datas.year == "" || datas.kms_driven == "")
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

                {
                f_carName.map((p) =>
                    <option value="{p}">{p}</option>
                )
                }
            </select>

            <label for="exampleFormControlSelect1">Company Name</label>
            <select class="form-control" id="exampleFormControlSelect1" name="company" onChange={handleChange} >
                <option value="">none</option>

                {
                    f_carCompany.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>
            <label for="exampleFormControlSelect1">Year</label>
            <select class="form-control" id="exampleFormControlSelect1" name="year" onChange={handleChange} >
                <option value="">none</option>
                {
                    f_carYear.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>
           
            <label for="exampleFormControlSelect1"  >fuel_type</label>
            <select class="form-control" id="exampleFormControlSelect1" name="	fuel_type" onChange={handleChange}>
                <option value="">none</option>
                <option value="10">Petrol</option>
                <option value="20">Disel</option>
            </select>
            <label for="exampleFormControlSelect1">kms_driven</label>
            <input class="form-control" id="exampleFormControlSelect1" name="kms_driven" onChange={handleChange}></input>
            <br></br>
            <button className="btn btn-dark" type="submit">Predict</button>
        </form>
    )
    }
}
export default PricePredict;