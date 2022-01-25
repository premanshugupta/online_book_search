import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, FormGroup, FormLabel,Container,Row,Col,Card} from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  const [apiKey,setApiKey] = useState("AIzaSyB-loLlZQeLuDs32FAxiOlNh_SF_I1LRMg");
  function handleChange(event){
    const book = event.target.value; 
    setBook(book);

  }
  function handleSubmit(event){
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=30")
    .then(data =>{
      console.log(data);
      setResult(data.data.items);
      
    })
    event.preventDefault();
  }
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Form className='btn' onSubmit={handleSubmit}>
          <Form.Group controlId='formBooks'>
            <Form.Label className='txt'>Online Books Search</Form.Label>
            <Form.Control type="text" onChange={handleChange}  placeholder='Enter Book Name' value={book} />
            <Form.Text className='text-muted'>Please type the name of any book above.</Form.Text>
          </Form.Group>
          <Button  variant='success' type='submit'>Search</Button>
        </Form>
        </Container>
        <Container>
                <Row>
                    <Col lg="12">
                                       
                        {result.map((book,key)=>{
                            return (
                                <div>
                                <Card>
                        <Card.Body>
                            <Row>
                                <Col lg="4" style={{textAlign:'center'}}>
                                    <>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/><br/><br/>
                                    </>
                                <h5 style={{color:'#000'}}>{book.volumeInfo.title}</h5>
                                </Col>
                                <Col lg="8">
                                <h5 style={{color:'#000'}}>{book.volumeInfo.description}</h5><br/><br/><br/>
                                <a target="_blank" href={book.volumeInfo.previewLink}>
                                <Button  variant='success' type='submit'>OPEN BOOK</Button>
                                </a>
                                               
                                </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                        <br/>
                        </div>
                            )
                        })}
                        
                    </Col>
                </Row>
            </Container>
        {result.map(book => (
          <Container>
          <a target="_blank" href={book.volumeInfo.previewLink}>

          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          </a>
          <Form.Text className='text-muted'>{book.volumeInfo.title}</Form.Text>
          </Container>
        ))}
      </header>
    </div>
  );
}

export default App;
