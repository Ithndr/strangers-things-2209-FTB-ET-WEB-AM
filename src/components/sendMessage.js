import React from 'react'

export const sendMessage = (post_id, message) => {
    const token = window.localStorage.getItem('token');
    console.log(token)
    fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/${ post_id }/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message: {
      content: message
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
  return (
    <div>message</div>
  )
}
