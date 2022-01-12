import React from 'react';
import {Table, ListGroup, Card, Button} from 'react-bootstrap';

const CoinTable = () =>{
    return(
        <div >
        
            <Card border="light">
                <Card.Header className="bg-warning">Coin table</Card.Header>
                <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        
                    </Card.Text>
                    <Button size="sm" className="btn">Click</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CoinTable;