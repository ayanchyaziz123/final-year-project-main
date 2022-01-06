import React from 'react';
import {Table, ListGroup} from 'react-bootstrap';

const CoinTable = () =>{
    return(
        <div >
        <h5 className="text-white">Coin Table</h5>
            <ListGroup>
                <ListGroup.Item>Coins -- tk</ListGroup.Item>
                <ListGroup.Item>1 -- 100</ListGroup.Item>
                <ListGroup.Item>10 -- 1050</ListGroup.Item>
                <ListGroup.Item>20 -- 2200</ListGroup.Item>
                <ListGroup.Item>30 -- 3600</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default CoinTable;