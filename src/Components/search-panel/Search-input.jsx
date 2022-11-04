import React from "react";
import './search-input.css'
export default function SearchInput ({term,setTerm}) {
    return (
        <div className="search-panel d-flex">
           <input 
                className="form-control search-input" 
                type="text" 
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search to write"
           /> 
        </div>
    )
}