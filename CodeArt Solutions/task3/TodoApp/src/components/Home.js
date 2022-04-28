import React from "react";
import { useEffect, useState } from "react";
import Loading from './Loading';
import AddTodo from './AddTodo';
import Todo from './Todo';


const Home = () => {

    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/todos?_limit=29")
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((err) => {
                console.log(err);
            });
    };

    const onSearch = async (event) => {
        setSearchTerm(event.target.value);
    };


    const onAdd = async (title, keyRef) => {

        await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                userId: keyRef,
                key: keyRef,
                title: title,
                complete: false,

            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },

        })
            .then((res) => {
                if (res.status !== 201) {
                    return;
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setTodos((todos) => [...todos, data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status !== 200) {
                    return;
                } else {
                    setTodos(
                        todos.filter((todo) => {
                            return todo.id !== id;
                        })
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onChange = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT",
        })
            .then((res) => {
                if (res.status !== 200) {
                    return;
                } else {
                    setTodos(
                        todos.map((todo) => {
                            if (todo.id === id) {
                                todo.completed = !todo.completed;
                            }
                            return todo;
                        })
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    console.log(todos);
    return (
        <div className="App">
            <h3><strong>Darko Boshkovski - Todo App</strong></h3>
            <br />
            <AddTodo onAdd={onAdd} />
            <input onChange={onSearch} placeholder="Search Todo" name="search" value={searchTerm}/>

            {todos.length > 0 ?
                <div>
                    {todos.filter(el=> el.title.includes(searchTerm)).map((todo) => (
                        <Todo
                            userId={todo.userId}
                            id={todo.id}
                            key={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onDelete={onDelete}
                            onChange={onChange}
                        />
                    ))}
                </div> : <Loading />}
        </div>
    );
}

export default Home;