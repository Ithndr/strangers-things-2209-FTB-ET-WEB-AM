
export const deletePost = async (post_id) => {
    try {
        const token = window.localStorage.getItem('token');
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/${post_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) { console.error(error)}
}

