import React from 'react'

interface User {
    id: number,
    name: string
}
const NewUserPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const users: User[] = await res.json()


  return (
    <>
        <h1>Users</h1>
        <ul>
            <li>{users.map(user => user.id)}</li>
        </ul>
    </>
  )
}

export default NewUserPage