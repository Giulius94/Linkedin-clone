import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';

export default function PostFinto() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMmU3OTkxM2Y2NTAwMThkMDk1YmEiLCJpYXQiOjE3MDYxNzYxMjEsImV4cCI6MTcwNzM4NTcyMX0.O1zhA65zNqI-ZmpFBTPAmpGJ-zFueo8cw4ei9XuHWXw';

    const [post, setPost] = useState({
        text:'',   
    });


    const [postUser, setPostUser] = useState([]);

    useEffect(()=>{
        postListUser();
     },[])

    function postListUser(){
        fetch("https://striveschool-api.herokuapp.com/api/posts/",{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log("THIS IS POST LIST:", data);
          const postsByUser = data.filter(post => post.username === "FelipePizarro");
          setPostUser(postsByUser);
    
            console.log("POSTS BY USER:", postsByUser);
    
        
        })
        .catch(error=>{
          console.error(error)
        })
    
      }



function postPosts(){
    fetch("https://striveschool-api.herokuapp.com/api/posts/",{
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
      .then(response => response.json())
      .then(data => {
        console.log("THIS IS POSTS:", data);
  
      
      })
      .catch(error=>{
        console.error(error)
      })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevState => { 
        const newPost = {...prevState, [name]: value };
        console.log('NEW POST from set:', newPost);
        return newPost
});
};

  const handleSubmit = (e) => {
    e.preventDefault();
    postPosts(post);
    //handleClose();
};
  
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>POST</Form.Label>
        <Form.Control 
        name='text'
        value={post.text}
        onChange={handleChange}
        type="text" 
        placeholder="Enter post" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    

    {/*RITORNO FILTER */}

    {postUser && postUser.map(p => (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{p.username}</Card.Title>
        <Card.Text>
        {p.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    ))}
    
    </>
  )
}
