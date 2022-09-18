import React from 'react';
import mainStyles from '../assets/css/mainStyles';

function Footer (props) {
    const data = props.data;
    const { FooterDiv } = mainStyles;

    return (
        <FooterDiv>
            <p>You're at page {data} of 42.</p>
            <p>Developed by Felipe Goulart</p>
        </FooterDiv>
    )
}

export default Footer;