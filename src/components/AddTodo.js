import React from "react";
import './AddTodo.css'

var keyRef = 200;
const AddUser = ({ onAdd }) => {
  keyRef ++


const handleOnSubmit = (e) => {

    e.preventDefault();
    onAdd(e.target.title.value,keyRef);
    e.target.title.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Add Todo" name="title" />
        <span> </span>
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
