import React from 'react';

import { logoClasses } from '../styles/Classes';
import { logoStyles } from '../styles/Styles'
import logo from '../images/smithfield-logo.jpg';

const Logo = (props) => {
  return (
    <div className="row">
      <div className="col">
        <img
          style={logoStyles}
          className={logoClasses} 
          alt="Smithfield: Good Food. Responsibly."
          src={logo}  
        />
      </div>
    </div>
  )
}

export default Logo;