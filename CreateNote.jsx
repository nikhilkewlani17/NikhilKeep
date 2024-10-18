import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

    const[expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title:'',
        content:'',
    })

    const InputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;

        const {name , value} = event.target;
        setNote((prevData) => {
            console.log(prevData)
            return {
                ...prevData,
                [name] : value
            };
        });
        console.log(note);
    };

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        })
    };
    const expandIt = () => {
        setExpand(true);
    }

    const btoNormal = () => {
        setExpand(false);
    }

  return (
    <>
      <div className='main_note'>
        <form>
        {expand?
            <input 
            type='text' 
            name='title' 
            value={note.title} 
            onChange={InputEvent} 
            placeholder='Titile'  
            autoComplete='off'/> : null}

            <textarea
            rows='' 
            name='content' 
            column='' 
            value={note.content} 
            onChange ={InputEvent} 
            placeholder='Write a note...'
            onClick={expandIt}
            onDoubleClick={btoNormal}
            />

            <Button onClick={addEvent}>

                <AddIcon className='plus_sign' />

            </Button>
        </form>
      </div>
    </>
  )
}

export default CreateNote
