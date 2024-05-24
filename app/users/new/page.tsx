'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


interface User {
    id: number,
    name: string,
    email: string
}
const NewUserPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users: User[] = await res.json()

    const router = useRouter(); 


  return (
    <>
        <h1>New User</h1>
        <button onClick={() => router.push('/users')} className='btn btn-primary'>Create</button>
        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <tr key={user.id}><th>{user.name}</th><th>{user.email}</th></tr>)}
          </tbody>
        </table> */}
            
       
    </>
  )
}

export default NewUserPage