//Framework
import React from 'react'


const Footer = () => {
    let currentYear = new Date
    return (
        <footer 
            style={{
                height: '100px',
                borderTop: '1px solid #eaeaea',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color:'#ffffff',
                backgroundColor: '#212121',
            }}
        >
            <h6>Copyright © {currentYear.getFullYear()}</h6>
        </footer>
    )
}

export default Footer


