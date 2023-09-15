import React, { useEffect, useState } from 'react';
import './App.css';
import UsersList from './Users/UsersList';
import Navigater from './Navigater.js/Navigater';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Profile from './Users/Profile';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const[err , setErr]= useState('')
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then( response=> {
          setUsers(response.data)
        console.log(...response.status);
      })
      .catch(function (error) {
        // handle error
          setErr(error.message)
        console.log(error);
      })

    }, []);
    console.log(users)
   err? console.log(err) : console.log('no error')
  return (
    <div className="App">
      <Navigater />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/users' element={<UsersList users={users}/>} />
  <Route path='/users/:id' element={<Profile users={users} /> } />
</Routes>
    </div>
  );
}

export default App;
