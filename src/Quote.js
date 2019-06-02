import React, {Component} from 'react';
import './Quote.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faDice, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons/faQuoteLeft";

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: ["A", "B", "C", "D"],
            quote: [1, 2 , 3 , 4],
        }
        this.randomQuote = this.randomQuote.bind(this);
    }


    randomQuote() {
        let choice = Math.floor(Math.random() * 20);
        console.log("Hello");
        return console.log(choice)

    }


    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (

            <div id="quote-box" className="jumbotron">
                <h1 className="display-4">Random Quote Generator</h1>
                <p id="text" className="lead"> <FontAwesomeIcon icon={faQuoteLeft}/> This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information. <FontAwesomeIcon icon={faQuoteRight}/></p>
                <hr className="my-4"/>
                    <p id="author">It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <a className="btn btn-primary btn-lg mx-2" href="#" role="button" onClick={this.randomQuote}><FontAwesomeIcon icon={faDice}/> New Quote</a>
                    <a className="btn btn-primary btn-lg" href="#" role="button"><FontAwesomeIcon icon={faTwitter}/> Tweet Quote</a>

            </div>
        );
    }
}

Quote.propTypes = {};

export default Quote;