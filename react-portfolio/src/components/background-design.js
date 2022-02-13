import React, { useEffect } from 'react';
import background from "/Users/samkennedy/Desktop/React-Portfolio/src/wood-ring-GIF.gif";


const BackgroundDesign = () => {
    return (
    <div className="background-design">
        <div style={{ backgroundImage: `url(${background})` }}>
      </div>
    </div>
    )
};



export default BackgroundDesign;