import React from 'react';
import Issue from './Issues/Issues';
import Aside from './Aside/Aside';
import './Main.css'

const Main = () => {
    return (
        <div className="wrap grid-wrapper">
        <Issues />
        <Aside />
        </div>
    )
}

export default Main