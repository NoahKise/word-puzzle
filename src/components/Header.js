import React from 'react';
import '../header.css';

const Header = () => {
    const styleHead = {
        textAlign: 'center',
        fontFamily: 'monospace',
    }
    return (
        <React.Fragment>
            <div id='darkMode'>
                {/* <button id="darkBtn">Light Mode</button> */}
                <h1 style={styleHead}>Not Wordle</h1>
            </div>
        </React.Fragment>
    )
}
export default Header;