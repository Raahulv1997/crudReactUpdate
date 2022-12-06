import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import student from '../Image/student.png'

export const View = () => {
    const {id}= useParams("")
    console.log(id)

    const [getState, setGetState]=useState([])

    const fetchUser=async()=>{
        const result=await axios.get(`http://localhost:1000/user/${id}`)
       setGetState(result.data)
      
    }
     useEffect(()=>{
      fetchUser();
     },[])

  return (
    <>
    <h1 className='my-3 py-3 bg-success text-center text-white'>Details</h1>
    <Container>
        <Row className='justify-content-center'>
           <Col lg={4}>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student}  />
      <Card.Body>
        <Card.Title> Name:  {getState.name}</Card.Title>
        <Card.Text>
         Date of Birth:-  {moment(getState.dob).format('DD-MM-YYYY')}
        </Card.Text>
        <Card.Text>
         Gender:- {getState.gender}
        </Card.Text>

        <Card.Text>
         City:- {getState.city}
        </Card.Text>

        <Card.Text>
         Mobile:- {getState.mobile}
        </Card.Text>

        <Card.Text>
         Email:-  {getState.email}
        </Card.Text>

        <Card.Text>
         Description:-   {getState.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
           </Col>
        
        </Row>
    </Container>

    </>
  )
}
