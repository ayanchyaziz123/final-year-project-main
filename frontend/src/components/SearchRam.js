import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchRAM() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (

         
                <Form.Group as={Row} className="mb-3">
                    <h5>RAM</h5>

                    <Col sm={10} >
                      
                <Form onSubmit={submitHandler} inline>
                    <Form.Check
                        type="radio"
                        color="warning"
                        label="8gb"
                        name="btn1"
                        value="8"
                        id="formHorizontalRadios1"
                        onChange={(e) => setKeyword(e.target.value + 'RAM')}
                    />
                    <Form.Check
                        type="radio"
                        color="warning"
                        label="16gb"
                        name="btn1"
                        value="16"
                        id="formHorizontalRadios1"
                        onChange={(e) => setKeyword(e.target.value + 'RAM')}
                    />

                    <Form.Check
                        type="radio"
                        color="warning"
                        label="8gb"
                        name="btn1"
                        value="8"
                        id="formHorizontalRadios1"
                        onChange={(e) => setKeyword(e.target.value + 'RAM')}
                    />
                    <Form.Check
                        type="radio"
                        color="warning"
                        label="16gb"
                        name="btn1"
                        value="16"
                        id="formHorizontalRadios1"
                        onChange={(e) => setKeyword(e.target.value + 'RAM')}
                    />
                   

                    <Button
                        type='submit'
                        variant='warning'
                        className='p-2 search-bar-button'
                        size="sm"
                    >
                        <i class="fas fa-search"></i>
                    </Button>
                </Form>
                    </Col>
                </Form.Group>
       
      
    )
}

export default SearchRAM;
