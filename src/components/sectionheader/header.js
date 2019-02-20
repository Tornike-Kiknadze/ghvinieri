import React from 'react';

import './header.css';

const Header = (props)=> {
   let {header, title} =props;

 

 
        return (
            <React.Fragment> 
                <p className='products-header'>{header}</p>
                <p className='products-title'>{title}</p>
                <div className='products-image'><img src={require('./assets/img/glasses.png')}></img></div>

                </React.Fragment>
          
        );
    }
 

export default Header;
