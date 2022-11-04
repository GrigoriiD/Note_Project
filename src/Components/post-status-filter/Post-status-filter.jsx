import React from "react";
import './post-status-filter.scss';
export default function PostStatusFilter({filter,setFilter}) {
    const buttons = [
        {name:'all',label:'All'},
        {name:'like',label:'Liked'},
    ]
    return(
        <div className="btn-group">
            {buttons.map(({name,label}) => {
                const active = filter === name;
                const className = active ? 'btn-info': 'btn-outline-secondary'
                return(
                    <button key={name}
                    onClick = {() => setFilter(name)} 
                    type="button" 
                    className={`btn ${className}`}>
                        {label}
                    </button>
                );
            })}
        </div>
    )
}