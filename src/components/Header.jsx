import React from 'react';

function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    }
  return (
   <header style={headerStyle} >
    <div className='container'>
        <h1>{text}</h1>
    </div>
   </header>
  );
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "#000000",
    textColor: "#ff6a95"
}

// Header.PropTypes = {
//     text: PropTypes.string
// }


export default Header;
