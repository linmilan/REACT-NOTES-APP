import React from 'react';
import { Link } from 'react-router-dom';

export const NoteItem = ({note})=> {
   
    return(
        <Link to= {`/edit-note/${note.id}`} className='note' style={{background: '#'+note.color,opacity:0.9}}>
            <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</h4>
            <p>{note.date}</p>
        </Link>
    )
}




