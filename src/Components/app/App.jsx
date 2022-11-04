import React, { useEffect, useState } from "react";
import './app.scss'
import AppHeader from "../app-header";
import SearchInput from "../search-panel";
import PostStatusFilter from "../post-status-filter/";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
export default function App () {
    const data = [
        {   label :'В проекте используется последняя версия React - 18!',
            important:true,
            id:"sdda",
            like: true
        },
        {
            label:'React - это самая популярная библиотека для создания пользовательских интерфейсов в одностраничных приложениях.',
            important:false,
            id:"wdas",
            like: false
        },
        {
            label:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde deleniti tenetur, harum dignissimos excepturi quis animi maiores similique nemo nesciunt, eos ducimus earum. A minima cupiditate tempore temporibus eligendi.',
            important:false,
            id:"qwdas",
            like: false
        },
    ]
    const [elem,setElem] = useState(data);
    const [term,setTerm] = useState('');
    const [filter,setFilter] = useState('all')
    let liked = elem.filter(el => el.like).length;
    const allPosts = elem.length;
    const searchPost = (items,term) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => item.label.indexOf(term) > -1 );
    }
    const filterPosts = (items,filter) => {
        if(filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items
        }
    }
    const visiblePost = filterPosts(searchPost(elem,term),filter)
    const  onDelete = (id,index) => {
        setElem(elem.filter((el) =>{
           return el.id !== id
            }));
        }
    const onFilter = (name) => setFilter(name)
    const addItem = (event,body,setAddForm) => {
        const randId = Math.random(99) * 100;
        event.preventDefault()
        setAddForm('');
        setElem(
            ([...elem,{label:body,important:false,like:false,id: randId}])
        )
    }
    const  onLiked= (id) =>{ 
        const index =  elem.findIndex(el => {
            return el.id === id 
        })
        const newIndex = elem[index]
        const imprt = {...newIndex, like:!newIndex.like};
        setElem(
            [...elem.slice(0 , index,), imprt, ...elem.slice(index + 1)]
        )
    }
    const onImportant = (id) =>{
        const index =  elem.findIndex(el => {
            return el.id === id 
        })
        const newIndex = elem[index]
        const imprt = {...newIndex, important:!newIndex.important};
        setElem(
            [...elem.slice(0 , index,), imprt, ...elem.slice(index + 1)]
        )
    }
        return (
        <div className="app">
            <AppHeader liked={liked} allPosts={allPosts}/>
            <div className="search-input d-flex">
                <SearchInput term={term} setTerm={setTerm}/>
                <PostStatusFilter filter={filter} setFilter={onFilter}/>
            </div>
            <PostList data={visiblePost} setElem={onDelete} onLiked={onLiked} onImportant={onImportant} />
            <PostAddForm onAddItem={addItem}/>
        </div>
    )
}