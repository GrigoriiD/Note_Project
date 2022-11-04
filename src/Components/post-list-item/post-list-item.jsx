import React, { useState } from "react"
import './post-list-item.scss'
export default function  PostListItem ({label,love,setElem,onImportant,onLiked,save}) {
    let classNames = "app-list-item d-flex justify-content-between "

    // const setImportant = () =>{
    //     setSave(!save)
    // }
    // const setLike = () => {
    //     setLove(!love)
    // }
    save ? classNames += " important" :  classNames
    love ? classNames += " like" :  classNames
    return(
            <div className={classNames}>
                <span className="app-list-item-label "
                onClick={onLiked}
                >
                    {label}    
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                     className="btn-star btn-sm"
                     onClick={onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button"
                     className="btn-trash btn-sm"
                     onClick={setElem}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
    )
}