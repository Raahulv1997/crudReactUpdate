import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

import{Link, NavLink, useNavigate} from 'react-router-dom'

export const Home = () => {
  const [getUser,setGetuser]=useState([]);
  // const Navigation=useNavigate("")
    
  const fetchUser= async()=>{
    const result=await axios.get('http://localhost:1000/user')
     setGetuser(result.data)
  }
  useEffect(()=>{
    fetchUser();
  },[])

 const deleteUser=async(id)=>{
    const result= await axios.delete(`http://localhost:1000/user/${id}`)
    if(result.status===204){
      fetchUser();
    }
    else{
      alert("not delete")
    }
 }

  return (
    <>
    <h1 className='py-3 my-3 bg-success text-center text-white'>User Management System</h1>

     <NavLink to={'/adduser/:id'}><Button className='btn btn-primary'>Add user</Button></NavLink> 
     <Table striped bordered hover className='mt-3'>
      <thead className='table-dark'>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>CITY</th>
          <th>OPERATIONS</th>

        </tr>
      </thead>
      <tbody>
        {  
        getUser.map((item, id)=>{
          return(
            <>
             <tr>
          <td>{id+1}</td>
          <td>{item.name}</td>
          <td>{item.gender}</td>
          <td>{item.city}</td>
          <td>
           <div className='justify-content-between d-flex button_box' style={{width:50}}>
           <Link to={`/view/${item._id}`}><Button>Views</Button></Link>
           <Link to={`/adduser/${item._id}?page=edit`}><Button className='mx-2'>Edit </Button></Link>
           <Link ><Button onClick={()=>{deleteUser(item._id)}}>Delete</Button></Link>
          
        
           </div>
          </td>
        </tr>
            </>
          )
        })
         
        }
        
       
      </tbody>
    </Table>

    </>
  )
}
