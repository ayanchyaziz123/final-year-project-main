import axios from 'axios';
import { React, useState, initialState, useEffect, context}from 'react';
import {Redirect} from 'react-router-dom';


const baseURL = "http://127.0.0.1:8000/api/products/all/";

const CompareProduct = () =>{
    const [productss, setProductss] = useState([])
    const [isPC, setIsPC] = useState(false);
    const [gt, setGt] = useState({
        laptop_1: "",
        laptop_2: "",

    });
    
    useEffect( async () => {
        try{
            axios.get(baseURL).then((response) => {
                setProductss(response.data)

            });
        }
        catch(error)
        {
            console.log(error);
        }
    }, []);

    const handleChange = (e) =>{
        console.log(productss)
        setGt({ ...gt, [e.target.name]: e.target.value })
       
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("pro : ", productss)
        
        if(gt.laptop_1 == "" || gt.laptop_2 == "")
        {
            alert("You did not fill up both input field please try again")
        }
        else if (gt.laptop_1 == gt.laptop_2) {
            alert("Both Value Are Same. Please Try different value");
            //window.location.reload(false);
        }
        else{
            setIsPC(true);
            
        }
    }
    if(isPC)
    {
        return(
            <Redirect
                to={{
                    pathname: "/compare",
                    state: { lep1: gt.laptop_1,
                             lep2: gt.laptop_2,
                           }
                }}
            />
            )
    }
    else{

    
    return(
        <form onSubmit={handleSubmit}>
        <div className="card p-2 bg-warning">
            <h5>Compare Products</h5>
            <p>Choose Two Products to Compare</p>
                <label for="exampleFormControlSelect1">Leptop1</label>
                <select class="form-control" id="exampleFormControlSelect1" name="laptop_1" onChange={handleChange} >
                    <option value="">none</option>
                    {
                        productss.map((p) =>
                            <option value={p._id}>{p.name}</option>
                        )
                    }
                    
                </select>
               
            <label for="exampleFormControlSelect1">Leptop2</label>
            <select class="form-control" id="exampleFormControlSelect1" name="laptop_2" onChange={handleChange} >
                <option value="">none</option>
                    {
                        productss.map((p) =>
                            <option value={p._id}>{p.name}</option>
                        )
                    }

                   
            </select>
            <br></br>
            <button type="submit" className="btn btn-dark">Comparison</button>
        </div>
        </form>
    );
    }
}
export default CompareProduct;