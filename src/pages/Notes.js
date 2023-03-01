import React, { useEffect, useState } from "react";
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import { NoteItem } from '../components/NoteItem';
import { Link } from "react-router-dom";

const Notes = ({notes}) => {
    const [showSearch, setShowsearch] = useState(false);
    const [text, setText] = useState ('');
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
                return note;
            }
        }))

    }

    useEffect(handleSearch, [text])

    return(
        <section>
            <header className="notes__header">
                {!showSearch && <h2>My Notes</h2>}
                {showSearch && <input type='text' value={text} onChange={(e)=> {setText(e.target.value); handleSearch();}} autoFocus placeholder='keyword....'></input>}
                <button className="btn" onClick={()=> setShowsearch(prevState => !prevState)}><CiSearch /></button>
            </header>
            <div className="notes__container" >
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-note' className="btn add__btn"><BsPlusLg /></Link>
        </section>
        
    )
}

export default Notes