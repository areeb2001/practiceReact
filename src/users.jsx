import React from 'react'
import { useParams,useLocation } from 'react-router-dom';
const Users = () => {
    const {res}=useParams();
    const location  =useLocation();
    console.log(location)
  return (
    <>
    <div className='alert alert-success' role='alert'>
    <h4 className='alert-heading'> {res} User</h4>
    <p>My Location is {location.pathname}</p>
    </div>
    </>
  )
}
export default Users;