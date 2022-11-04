import React, { useState } from "react";
import './post-add-form.scss'
export default function PostAddForm ({onAddItem}) {
    const [addForm,setAddForm] = useState('')
    return(
        <form className="bottom-panel d-flex" onSubmit={(e) => onAddItem(e,addForm,setAddForm)}>
            <input type="text" 
            placeholder="Your post"
            className="form-control  new-post-label"
            value={addForm} onChange={(e) => setAddForm(e.target.value)}/>
            <button
            type="submit"
            className="btn btn-outline-secondary">
                Submit
            </button>
        </form>
    )
}