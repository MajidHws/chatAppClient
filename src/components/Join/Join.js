import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    console.log('Join');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div className="">
                    <input type="text" placeholder="Name" className="joinInput" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="">
                    <input type="text" placeholder="Room" className="joinInput mt-20" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sing In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join