import React from "react";
import NoteItems from "./note-items";

// Declarate State
const NoteStates = ({notes, onDelete, onChange}) => {
    const activeNotes = !notes.length? [] : notes.filter((note) => note.archived === false);
    const archivedNotes = !notes.length ? [] : notes.filter((note) => note.archived === true);

    if (activeNotes) {
        return (
         <>
            <h2>Active Notes</h2>
            {activeNotes.length === 0? (
               <p className='notes-list__empty-message'>Empty Notes</p>
            ) : (
                <div className='notes-list'>
                {activeNotes.map((note, idx) => {
                    return (
                        <NoteItems key={idx} note={note} onDelete={onDelete} onChangeArchive={onChange} />
                    );
                })}
            </div>
            )} 
        </>
        )
    } else if (archivedNotes) {
        return (
            <>
                <h2>Archived Notes</h2>
                {archivedNotes.length === 0? (<p className='notes-list__empty-message'>Empty Notes</p>) : ( <div className='notes-list'>
                    {archivedNotes.map((note, idx) => {
                        return (
                            <NoteItems key={idx} note={note} onDelete={onDelete} onChangeArchive={onChange} />
                        );
                    })}
                </div>)}
            </>
        )
    }
}

export default NoteStates;