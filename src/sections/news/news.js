import React, { Component } from 'react';
import './news.css';
import Header from '../../components/sectionheader/header';
import Event from '../../components/events/event';
import { Route } from 'react-router-dom';


class News extends Component {

    state = [
        {
            id: 1,
            date: 11,
            month: 'sektember'
        },
        {
            id: 2,
            date: 12,
            month: 'sektember1'
        },
        {
            id: 3,
            date: 13,
            month: 'sektember3'
        },
    ]



    render() {


        return (



            <section className='news' ref={this.props.reference}>
                <Header header='News' title="don't miss anything" styleHeader='white' styleTitle='white' />
                <div className="event-wrapper">


                    <Route path='/' render={props => <Event {...props} events={this.state} />} ></Route>
                    







                </div>
            </section>

        );
    }
}

export default News;
