import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function ConfirmDelete() {
    const [count, setCount] = useState(3)

    useEffect(() => {
        if(count){
            const timerId = setTimeout(() => setCount(count-1), 1000)
            return () => clearTimeout(timerId)
        }
    },[count])

    return <>
        <p>Item deleted</p>
        {count ? <p>redirecting in {count} seconds</p> : <Redirect to="/"/>}
    </>

}