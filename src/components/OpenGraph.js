import React from 'react'

function OpenGraph({ title, description, image, url }) {
  return (
    <>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
  </>

  )
}

export default OpenGraph