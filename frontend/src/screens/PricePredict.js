import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'


const baseURL = "http://127.0.0.1:8000/api/predict/";

function PricePredict() {

    var [isTrue, setTrue] = useState(false);
    const [predict, setPredict] = React.useState(null);
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
    const [lepSSD, setLepSSD] = React.useState([]);






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
            lep_touchscreen: "",
            lep_ips: "",
            lep_ssd: "",

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
            setLepSSD(response.data.ssd);

        });
    }, []);


    const handleChange = e => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (datas.lep_name == "" || datas.lep_company == "" ||

            datas.lep_inches == "" ||
            datas.lep_screenResolution == "" ||
            datas.lep_cpu == "" ||
            datas.lep_ram == "" ||
            datas.lep_memory == "" ||
            datas.lep_gpu == "" ||
            datas.lep_opSy == "" ||
            datas.lep_weight == "" ||
            datas.lep_touchscreen == "" ||
            datas.lep_ips == "" ||
            datas.lep_ssd == ""
        ) {
            window.alert("Fill up all informations")
            setTrue(false);
        }
        else {
            setTrue(true);
            axios.post(baseURL, {
                datas
            })
                .then((response) => {
                    setPredict(response.data);
                });
        }

    }


    if (isTrue) {

        return (
            <div>
                <Row>

                    <Col md={4}>
                        <ul class="list-group">

                            
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Company
                                <span class="badge badge-primary badge-pill">{datas.lep_company}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Type
                                <span class="badge badge-primary badge-pill">{datas.lep_name}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Size
                                <span class="badge badge-primary badge-pill">{datas.lep_inches} inches</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Screen Resolution
                                <span class="badge badge-primary badge-pill">{datas.lep_screenResolution}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                SSD
                                <span class="badge badge-primary badge-pill">{datas.lep_ssd} gb</span>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                CPU
                                <span class="badge badge-primary badge-pill">{datas.lep_cpu}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                RAM
                                <span class="badge badge-primary badge-pill">{datas.lep_ram} gb</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                HDD
                                <span class="badge badge-primary badge-pill">{datas.lep_memory} gb</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                SSD
                                <span class="badge badge-primary badge-pill">{datas.gpu}</span>
                            </li>
                           
                            
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                OS
                                <span class="badge badge-primary badge-pill">{datas.lep_opSys}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Weight
                                <span class="badge badge-primary badge-pill">{datas.lep_weight} kg</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Touch Screen
                                <span class="badge badge-primary badge-pill">{datas.lep_touchscreen}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                IPS
                                <span class="badge badge-primary badge-pill">{datas.lep_ips}</span>
                            </li>
                        </ul>
                    </Col>



                </Row>
                <h3 className="text-center mt-5"><bold>Predicted Price of leptop   <span class="badge badge-primary badge-pill">&#2547; {predict + (predict / 2)}</span> </bold></h3>

            </div>

        )
    }
    else {
        console.log(isTrue);
        return (
            <form onSubmit={handleSubmit}>

                <Row>
                    <Col md={6}>
                        <label for="exampleFormControlSelect1">Company</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_company" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepCompany.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>
                    <Col md={6}>


                        <label for="exampleFormControlSelect1">Type</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_name" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepName.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <label for="exampleFormControlSelect1">Screen Size(in Inches)</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_inches" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepInches.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>

                    <Col md={6}>
                        <label for="exampleFormControlSelect1">Screen Resolution</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_screenResolution" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepSR.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <label for="exampleFormControlSelect1">CPU</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_cpu" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepCpu.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>
                    <Col md={6}>

                        <label for="exampleFormControlSelect1">Ram Size(in GBs)</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_ram" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepRam.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <label for="exampleFormControlSelect1">SSD Size(in GBs)</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_ssd" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepSSD.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>
                    <Col md={6}>
                        <label for="exampleFormControlSelect1">HDD Size(in GBs)</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_memory" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepMemory.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>

                </Row>


                <Row>
                    <Col md={6}>
                        <label for="exampleFormControlSelect1">Operating System</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_opSys" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepOS.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>

                    </Col>


                    <Col md={6}>

                        <label for="exampleFormControlSelect1">Gpu</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_gpu" onChange={handleChange} >
                            <option value="">none</option>

                            {
                                lepGpu.map((p) =>
                                    <option value={p}>{p}</option>
                                )
                            }
                        </select>
                    </Col>



                </Row>

                <Row>
                    <Col md={6}>

                        <label for="exampleFormControlSelect1">Touch Screen</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_touchscreen" onChange={handleChange} >
                            <option value="">none</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>


                        </select>
                    </Col>
                    <Col md={6}>

                        <label for="exampleFormControlSelect1">IPS</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="lep_ips" onChange={handleChange} >
                            <option value="">none</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>


                        </select>
                    </Col>


                </Row >



                <label for="exampleFormControlSelect1">Weight(in kg)</label>
                <select class="form-control" id="exampleFormControlSelect1" name="lep_weight" onChange={handleChange} >
                    <option value="">none</option>

                    {
                        lepWeight.map((p) =>
                            <option value={p}>{p}</option>
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