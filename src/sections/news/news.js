import React, { Component } from 'react';
import './news.css';
import Header from '../../components/sectionheader/header';
import Event from '../../components/events/event';
 


class News extends Component {

 



    render() {
    

        return (



            <section className='news' ref={this.props.reference}>
               <Header header='News' title="don't miss anything" styleHeader='white' styleTitle='white'/>
                   <div className="event-wrapper">
                 
               
               
                   <Event date="12" month="April"/>
                   <Event date="13" month="May"/>
                   <Event date="14" month="June"/>
                   <Event date="14" month="August"/>
                   <Event date="12" month="April"/>
                   <Event date="13" month="May"/>
                   <Event date="14" month="June"/>
                   <Event date="14" month="August"/>
   
                   
                   
                   
                   
                   </div>
            </section>

        );
    }
}

export default News;
