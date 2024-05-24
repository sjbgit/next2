import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams: { sortOrder: string }
}


const UsersPage = async ({ searchParams: { sortOrder }}: Props) => {
    
    console.log('sort order in users page: ' + sortOrder)  
 
  return (
    <>
        <h1>Users</h1>
        <p>Last rendered: {new Date().toLocaleTimeString()}</p>
        <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage