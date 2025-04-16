import React from 'react'
import Sidebar from '../Components/SomChat/Sidebar'
import Chat from '../Components/SomChat/Chat'
import '.././chatStyle.scss'

const SomChat = () => {

    return (
        <div className='home' >
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default SomChat