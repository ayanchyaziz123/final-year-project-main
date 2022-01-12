import React from 'react';
import {Table, ListGroup, Card, Button} from 'react-bootstrap';

const CoinTable = () =>{
    return(
        <div >
        
            <Card border="light">
                <Card.Header className="bg-warning">Coin table</Card.Header>
                <Card.Body>
                    <p>10 coins is equal to 1000 tk</p>
                    <p>20 coins is equal to 1000 tk</p>
                    <p>30 coins is equal to 1000 tk</p>
                    <Button size="sm" className="btn">More</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CoinTable;