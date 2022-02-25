import React from 'react';
import initials from '../assets/initials.png'

function Footer(props) {
    return (
        <div>
            <div className='initials'>  
                <img src={initials} alt="logo" />
            </div>
            <h4 className='finalMessage'>Have a good day!</h4>
        </div>
    );
}

export default Footer;