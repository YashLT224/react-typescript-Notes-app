 import React, {useState} from 'react';
import './App.css';
import {Note} from './Models/note.model'
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import { Col, Row } from 'react-bootstrap';
import NotesList from './components/NoteList'
import CreateNotes from './components/CreateNotes'
function App() {
   const [notes, setNotes]= useState<Note[]>([{
     id:(new Date).toString(),
     title:'Meetings',
     text:'Schedule meeting with UI/UX team',
     color:'#fff',
     date:(new Date).toString()
   }])
  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
