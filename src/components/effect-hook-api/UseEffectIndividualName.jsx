import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectIndividualName = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/comments/${idFromButtonClick}`)
			.then(res => {
				setPost(res.data);
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <h3>{post.email}</h3>
    </div>
  )
}

export default UseEffectIndividualName