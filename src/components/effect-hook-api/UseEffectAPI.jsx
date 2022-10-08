import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        // console.log(res);
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseEffectAPI