import React from 'react'

function Post({ name, message , postImage}) {
  // console.log(postImage);
  return (
    <div>
      <h1>a post</h1>
      <h1>{name}</h1>
      <h1>{message}</h1>
      {
        postImage?<img src={postImage}/>:<></>
      }
      {/* <img /> */}
    </div>
  )
}

export default Post







