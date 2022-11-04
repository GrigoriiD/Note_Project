import React from "react"
import PostListItem from "../post-list-item"
import './post-list.scss'
export default function  PostList ({data,setElem,onLiked,onImportant}) {
    return(
            <ul className="app-list list-group">
                {data.map((el,index) =>{
                     return(
                        <li key={index} className="list-group-item">
                            <PostListItem {...el} setElem={() => setElem(el.id,index)} 
                             index={index} onLiked={() => onLiked(el.id)} onImportant={() => onImportant(el.id)}
                             save={el.important} love={el.like}/>
                        </li>
                    )
                })}
                
            </ul>
    )
}