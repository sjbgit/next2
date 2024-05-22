import React from 'react'

interface Props {
    params: { slug: string[] }
}

const ProductPage = ( { params: { slug } }: Props) => {
  return (
    <div>ProductPage {slug} - length: {slug.length}</div>
  )
}

export default ProductPage