import React from 'react'

interface Props {
    params: { id: number; photoId: number }
}

const PhotoPage = ({ params: { id, photoId }}: Props) => {
  return (
    <div>PhotoPage {photoId} - user ID: {id}</div>
  )
}

export default PhotoPage