import React from 'react';


function Card({children, reverse}) {
  return (
    //Conditional styling
    // <div className='card' style={{
    //     backgroundColor: reverse ? 'rgba(0,0,0,.4)' :  '#fff',
    //     color: reverse ? '#fff' : '#000'
    //     }}>
    //   {children}
    // </div>

    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  );
}

Card.defaultProps = {
    reverse: false,
}

// Card.PropTypes = {
//     children: PropTypes.node.isRequired,
//     reverse: PropTypes.bool,
// }

export default Card;
