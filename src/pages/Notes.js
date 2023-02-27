import React from "react";
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import { NoteItem } from '../components/NoteItem';
import { Link } from "react-router-dom";

const Notes = ({notes}) => {
    return(
        <section>
            <header className="notes__header">
                <h2>My Notes</h2>
                <input type='text' autoFocus placeholder='keyword....'></input>
                <button className="btn"><CiSearch /></button>
            </header>
            <div className="notes__container" >
                {
                    notes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link className="btn add__btn"><BsPlusLg /></Link>
        </section>
        
    )
}

export default Notes