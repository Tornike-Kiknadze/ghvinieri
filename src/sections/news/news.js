import React, { Component } from 'react';
import './news.css';
import Header from '../../components/sectionheader/header';

class News extends Component {

 



    render() {
    

        return (



            <section className='news' ref={this.props.reference}>
               <Header header='News' title="don't miss anything" styleHeader='white' styleTitle='white'/>
             
            </section>

        );
    }
}

export default News;
