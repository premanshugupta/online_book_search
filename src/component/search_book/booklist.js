import '../../App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, FormGroup, FormLabel, Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';

function Booklist(props) {

    return (
        <div>


            <Container>
                <Row>
                    <Col lg="12">

                        {props.result.map((book, key) => {
                            return (
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col lg="4" style={{ textAlign: 'center' }}>
                                                    <>
                                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} /><br /><br />
                                                    </>
                                                    <h5 className='txt' style={{ color: '#000' }}>{book.volumeInfo.title}</h5>
                                                </Col>
                                                <Col lg="8">
                                                    <p style={{ color: '#000', textAlign:'justify',fontSize:'medium'}}>{book.volumeInfo.description}</p>
                                                    <a target="_blank" href={book.volumeInfo.previewLink}>
                                                        <Button variant='success' type='submit'>OPEN BOOK</Button>
                                                    </a>

                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </div>
                            )
                        })}

                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Booklist;
