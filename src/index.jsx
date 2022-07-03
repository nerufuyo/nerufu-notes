import React from "react";
import ReactDOM from 'react-dom/client';
import {InitialData} from "./utils/initial-data"

// Render
ReactDOM.createRoot(document.getElementById('root')).render(
  
);

// Header
const HeaderComponents = ({onSearch}) => {
    return (
        <div className="note-app__header">
        <h1>Nerufu Notes</h1>
        <div className="note-search">
            <input type="text" placeholder="Search notes..."  onChange={(e) => onSearch(e)}/>
        </div>
    </div>
    );
}

// Footer
const FooterComponents = () => {
    return (
        <footer><span>©2022 | nerufuyo</span></footer>
    );
}

// Export Components
export {HeaderComponents, FooterComponents};