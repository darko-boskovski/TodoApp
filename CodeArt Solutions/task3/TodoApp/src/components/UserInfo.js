import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './userInfo.css'


const UserInfo = () => {

  let { id } = useParams();

  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(id);
  }, []);

  const fetchData = async (userId) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        console.log(userInfo)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickedHome = async () => {
    navigate("/");
  }


  return (
    <div id = "cardDiv" class="col d-flex justify-content-center">
      <Card>
        <Card.Header as="h5">User Info</Card.Header>
        <Card.Body>
          <Card.Text>Full Name: {userInfo.name}</Card.Text>
          <Card.Text>Username: {userInfo.username}</Card.Text>
          <Card.Text>Address: {userInfo.address &&
            <p className="card-text"><span className="card-text">Street: {userInfo.address.street }, </span><span className="card-text">City: {userInfo.address.city}</span></p>
          }</Card.Text>
          <Card.Text>Email: <a href="{userInfo.email}">{userInfo.email}</a></Card.Text>
          <Button variant="primary" onClick={clickedHome} >Go Back</Button>
        </Card.Body>
      </Card>
    </div>)

}

export default UserInfo