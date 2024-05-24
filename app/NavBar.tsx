import Link from '@/node_modules/next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-500 p-5'>
        <Link className='mr-5' href="/">Next.js</Link>  
        <Link href="/users">Users</Link> 
    </div>
  )
}

export default NavBar