import React from 'react';
import {Table, ListGroup, Card, Button} from 'react-bootstrap';

const CoinTable = () =>{
    return(
        <div >
        
            <Card>
                <Card.Header className="text-center bg-dark text-white">Coin Table</Card.Header>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item>Coin To Tk</ListGroup.Item>
                    <ListGroup.Item>1 To 100</ListGroup.Item>
                    <ListGroup.Item>10 To 1000</ListGroup.Item>
                    <ListGroup.Item>20 To 200</ListGroup.Item>
                    <ListGroup.Item>30 To 3000</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default CoinTable;