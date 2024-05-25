import Link from '@/node_modules/next/link'
import React, { Suspense } from 'react'
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
        <Link href="/users/new" className='btn'>New User</Link>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
          <UserTable sortOrder={sortOrder}/>
        </Suspense>
        
    </>
  )
}

export default UsersPage