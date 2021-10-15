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
    const [lepName, setLepName] = React.useState([]);
    const [lepCompany, setLepCompany] = React.useState([]);
    const [lepInches, setLepInches] = React.useState([]);
    const [lepSR, setLepSR] = React.useState([]);
    const [lepCpu, setLepCpu] = React.useState([]);
    const [lepRam, setLepRam] = React.useState([]);
    const [lepMemory, setLepMemory] = React.useState([]);
    const [lepGpu, setLepGpu] = React.useState([]);
    const [lepOS, setLepOS] = React.useState([]);
    const [lepWeight, setLepWeight] = React.useState([]);






    const [datas, setDatas] = useState(
        {
            lep_company: "",
            lep_name: "",
            lep_inches: "",
            lep_screenResolution: "",
            lep_cpu: "",
            lep_ram: "",
            lep_memory: "",
            lep_gpu: "",
            lep_opSys: "",
            lep_weight: "",

        }
    );

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setLepCompany(response.data.lc);
            setLepName(response.data.ltn);
            setLepInches(response.data.li);
            setLepSR(response.data.lsr);
            setLepCpu(response.data.lcpu);
            setLepRam(response.data.lram);
            setLepMemory(response.data.lmr);
            setLepGpu(response.data.lgpu);
            setLepOS(response.data.lops);
            setLepWeight(response.data.lw);

        });
    }, []);


const handleChange = e => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }
const handleSubmit = (event) => {
        event.preventDefault();
    if (datas.lep_name == "" || datas.lep_company)
        {
            window.alert("Fill up all informations")
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


            <label for="exampleFormControlSelect1">Company</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_company" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepCompany.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>


            <label for="exampleFormControlSelect1">Name</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_name" onChange={handleChange} >
                <option value="">none</option>

                {
                lepName.map((p) =>
                    <option value="{p}">{p}</option>
                )
                }
            </select>

            <label for="exampleFormControlSelect1">Size</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_inches" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepInches.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>
           

            <label for="exampleFormControlSelect1">Screen Resolution</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_screenResolution" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepSR.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>

            <label for="exampleFormControlSelect1">CPU</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_cpu" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepCpu.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>

            <label for="exampleFormControlSelect1">Ram</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_ram" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepRam.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>
            
            <label for="exampleFormControlSelect1">Memory</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_memory" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepMemory.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>

            <label for="exampleFormControlSelect1">Gpu</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_gpu" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepGpu.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>
            <label for="exampleFormControlSelect1">OS</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_opSys" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepOS.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>

            <label for="exampleFormControlSelect1">Weight</label>
            <select class="form-control" id="exampleFormControlSelect1" name="lep_weight" onChange={handleChange} >
                <option value="">none</option>

                {
                    lepWeight.map((p) =>
                        <option value="{p}">{p}</option>
                    )
                }
            </select>


           <br></br>
           
            <button className="btn btn-dark" type="submit">Predict</button>
        </form>
    )
    }
}
export default PricePredict;