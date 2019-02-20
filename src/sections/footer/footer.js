import React, { Component } from 'react';
import './footer.css';
import Wine from '../../assets/svg/wine';
import Facebook from '../../assets/svg/facebook';
import Instagram from '../../assets/svg/instagram';
 

class Footer extends Component {

 



    render() {


        return (



            <section className='footer'>
        {/* <img src={require('./assets/img/wine.png')}></img> */}
            <Wine fill={'#a10215'} width={80} height={80} />
            <div className='footer-contact'>
            
            
            <Facebook fill={'#666666'} width={19} height={19} />
            <Instagram fill={'#666666'}  width={19} height={19}/>
            
            
            </div>
            </section>

        );
    }
}

export default Footer;
