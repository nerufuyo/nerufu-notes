import React from "react";
import DateFormat from "../utils/date-format";

// Declarate Components
const NoteItems = ({note, onDelete, onChange}) => {
    return (
        <div className="note-item">
            <div className="note-item__constructor">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{DateFormat(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__event">
                <button className="note-item__delete-button" onClick={() => onDelete(note.id)}>Delete</button>
                <button className="note-item__archive-button" onClick={()=> onChange(note.id)}>{!note.archived? 'Archived' : 'Archive'}</button>
            </div>
        </div>
    );
}

// Export Components
export default NoteItems;