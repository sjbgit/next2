import Link from '@/node_modules/next/link';
import React from 'react'

interface User {
    id: number,
    name: string,
    email: string
}

const UserTable = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    const sort = (a: User, b: User) => {
      const aValue = a.name[0];
      const bValue = b.name[0]; 
      if (a < b) {
        return -1;
      }
      else if (a > b) {
        return 1;
      }
      else {
        return 0; 
      }
    }

    const output = () => {
      console.log(users.sort(sort))
    }

    //output(); 
    
  return (
    <table className='table table-bordered'>
          <thead>
            <tr>
              <th><Link href="/users?sortOrder=name">Name (user table separate)</Link></th>
              <th><Link href="/users?sortOrder=email">Email</Link></th>
            </tr>
          </thead>
          <tbody>
          {users.sort(sort).map(user => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>)}
            {/* {users.map(user => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>)} */}
          </tbody>
        </table>
  )
}

export default UserTable