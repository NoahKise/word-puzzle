import React from 'react';

const Header = () => {
    const styleHead = {
        textAlign: 'center',
        fontFamily: 'monospace',
    }
    return(
        <React.Fragment>
        <h1 style={styleHead}>Not Wordle</h1>
        </React.Fragment>
    )
}
export default Header;