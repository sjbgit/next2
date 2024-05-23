import React from 'react'
import UserTable from './UserTable'

// interface User {
//     id: number,
//     name: string,
//     email: string
// }

interface Props {
  searchParams: { sortOrder: string }
}


const UsersPage = async ({ searchParams: { sortOrder }}: Props) => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const users: User[] = await res.json();

    console.log(sortOrder)  
 
  return (
    <>
        <h1>Users</h1>
        <p>Last rendered: {new Date().toLocaleTimeString()}</p>
        <UserTable/>
        {/* <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>)}
          </tbody>
        </table> */}
    </>
  )
}

export default UsersPage