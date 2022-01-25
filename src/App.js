import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, FormGroup, FormLabel,Container} from 'react-bootstrap';
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
        {result.map(book => (

          <a target="_blank" href={book.volumeInfo.previewLink}>

          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          </a>
        ))}
      </header>
    </div>
  );
}

export default App;
