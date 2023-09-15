import React from 'react'
import './UsersList.css'
import { Button, Table } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const UsersList = ({users}) => {
  const nav = useNavigate()
console.log(users)
  return (
    <div>

<Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Adress</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>

{users.map(user => <>
  <tr>
  <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone} </td>
            <td>{user.address.city}, {user.address.street}, {user.address.suite}</td>
            <td><Button onClick={() => nav(`/users/${user.id}`)}>Profile</Button></td>
            </tr>
</>)}



          </tbody>
          </Table>

    </div>

  )
}

export default UsersList
