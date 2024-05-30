'use client'
import Error from '@/node_modules/next/error'
import React from 'react'

interface Props {
    error: Error;
    reset: () => void; 
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log('Error: ', error)
  return (
    <>
        <div>Error on this page...</div>
        <button className='btn' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage;