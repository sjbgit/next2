import Link from '@/node_modules/next/link';
import React from 'react'
import { sort } from 'fast-sort'

interface User {
    id: number,
    name: string,
    email: string
}

interface Props {
  sortOrder: string 
}

const UserTable = async ({ sortOrder}: Props) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    console.log('start sort order - user table: ', sortOrder)
    const sortedUsers = sort(users).asc(sortOrder === 'email' ? ((user: User) => user.email) : ((user: User) => user.name));
  return (
    <table className='table table-bordered'>
          <thead>
            <tr>
              <th><Link href="/users?sortOrder=name">Name (user table separate)</Link></th>
              <th><Link href="/users?sortOrder=email">Email</Link></th>
            </tr>
          </thead>
          <tbody>          
            {sortedUsers.map((user: User) => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>)}
          </tbody>
        </table>
  )
}

export default UserTable