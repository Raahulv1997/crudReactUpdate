import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const AddUser = () => {
    
  const {id} =useParams("")


  const [formdata, setFormData ]= useState([]) 
  const Navigation= useNavigate("")

  

const fetchUser= async()=>{
  const result=await axios.get(`http://localhost:1000/user/${id}`)
  setFormData(result.data)
 
    
}

  useEffect(()=>{
    fetchUser();
  },[])

  
  const valueHandler=(e)=>{
    setFormData({...formdata,[e.target.name]:e.target.value})
   
  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(formdata)
    console.log("idddddddddd--- "+id)
     
     if(id === ":id"){
      const data= await axios.post('http://localhost:1000/user',formdata)
      if(data.status===200){
       Navigation('/')
      }
      else{
        alert("not added user")
      }
     }
    
           if(id){
            const update= await axios.put(`http://localhost:1000/user/${id}`,formdata)
            if(update.status===200){
              Navigation('/')
             }
             else{
               alert("not Updated user")
             }

           }
       
  }

  return (
    <>
     <h1 className=' my-3 py-3 bg-success text-white text-center'>Add user</h1>
     <Container>
      <Row className="justify-content-center">
        <Col lg={4}>
        <Form className='mt-3' onSubmit={submitHandler}>
      <Form.Group className="mb-3" >
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={formdata.name} onChange={valueHandler} />
     
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email"  value={formdata.email} name="email" onChange={valueHandler} />
     
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your  Mobile No."  value={formdata.mobile} name="mobile" onChange={valueHandler} />
     
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type="date" name="dob"  onChange={valueHandler} value={moment(formdata.dob).format('YYYY-MM-DD')} />
        {/* value={moment(formdata.dob).format('YYYY-MM-DD')} */}
     
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>City:</Form.Label>
        <Form.Select aria-label="Default select example" name="city" value={formdata.city} onChange={valueHandler}>
      <option>Select your city</option>
      <option value="indore">Indore</option>
      <option value="gwalior">Gwalior</option>
      <option value="bhopal">Bhopal</option>
      <option value="shivpuri">Shivpuri</option>
    </Form.Select>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descriptions </Form.Label>
        <Form.Control as="textarea" rows={3} name="desc" value={formdata.desc} onChange={valueHandler} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Users
      </Button>
    </Form>
        </Col>
      </Row>
       
     </Container>
    </>
  )
}
