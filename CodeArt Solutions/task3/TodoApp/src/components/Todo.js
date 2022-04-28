import React from 'react';
import { useNavigate } from "react-router-dom";
import './todos.css'
import Button from 'react-bootstrap/Button';


const Todo = ({userId,id,title,onDelete,onChange,completed}) => {

    let navigate = useNavigate();

    const handleDelete = () => {
        onDelete(id);
    }
    const handleCheck = () => {
        onChange(id);
    }
    const handleUserInfo = () => {
       
        navigate("/user/" + userId);
    }

    
        if(completed){
            return(<div className='list'>
            <span  onClick={handleUserInfo} STYLE = "text-decoration:line-through">{title}</span>
            <span>
            <Button  onClick={handleCheck}>Check</Button>
            <span> </span>
            <Button className = "btn-danger" onClick={handleDelete}>Delete</Button>
            </span>
        </div>)
            
        }else{
            return(    <div className='list'>
            <span  onClick={handleUserInfo} STYLE = "text-decoration:none">{title}</span>
            <span>
            <Button onClick={handleCheck}>Check </Button>
            <span> </span>
            <Button className = "btn-danger" onClick={handleDelete}>Delete</Button>
            </span>
        </div>)
        
        }
        
    
}

export default Todo
