import React, { useState, useEffect } from 'react'

import './Input.css'

const Input = ({message, setMessage, sendMessage}) => (
    <form action="" className="form">
        <input
            placeholder="Type a message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            type="text"
            className="input" />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input