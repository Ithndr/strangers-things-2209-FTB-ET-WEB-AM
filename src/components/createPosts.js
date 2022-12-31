import React, { useState, useEffect } from 'react';




export const createPost = async ({ 
        token,
        title,
        description,
        price,
        willDeliver
    }) => {
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    willDeliver
                }
            })
        })
    } catch (error) { }
}
