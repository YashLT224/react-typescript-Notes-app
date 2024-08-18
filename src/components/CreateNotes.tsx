import * as React from 'react';
import { Form,Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import {Note} from '../Models/note.model'
 interface ICreateNotesProps {
  notes:Note[],
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) => {
  const [error,setError]=React.useState<string>('')
  const titleRef=React.useRef<HTMLInputElement | null>(null);
  const textRef=React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef=React.useRef<HTMLInputElement | null>(null);

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
        return setError("All fields are mandatory");
    }
    
    setError("");
    setNotes([...notes, {
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
    }]);
    
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  }
  return <>
  <h2> Create Nodes</h2>
  {error && <Alert variant="danger">{ error}</Alert>}
  <Form className='mt-3 mb-3' onSubmit={(e)=>handleSubmit(e)}>
    <Form.Group className='mb-3' controlId='formBasicTitle'>
      <Form.Label>Title</Form.Label>
      <Form.Control type='text' placeholder="Enter title for the Note" ref={titleRef}></Form.Control>
    </Form.Group>

    <Form.Group className='mb-3' controlId='formBasicText'>
      <Form.Label>Text</Form.Label>
      <Form.Control type='text' placeholder="Enter your Notes" as='textarea' ref={textRef} rows={3}></Form.Control>
    </Form.Group>

    <Form.Group className='mb-3' controlId='formBasicColor'>
      <Form.Label htmlFor='colorInput'>Color</Form.Label>
      <Form.Control type='color' id='colorInput' defaultValue='#dfdfdf' ref={colorRef} title="Choose  color"></Form.Control>
    </Form.Group>
    <Button type="submit" variant='primary'>Submit</Button>
  </Form>
  </>
};

export default CreateNotes;
