import React, {Component} from 'react';
import './Quote.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faDice, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons/faQuoteLeft";

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {

            current_author: 'Created using Bootstrap 4 and ReactJS',
            current_quote: 'Click the button to hear a cool random quote!',

            quotes: [
                {
                    author: "Dr.Seuss",
                    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
                },

                {
                    author: "Marilyn Monroe",
                    quote: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
                },

                {
                    author: "Stephen King",
                    quote: "Get busy living or get busy dying.",
                },

                {
                    author: "Mark Caine",
                    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
                },

                {
                    author: "Helen Keller",
                    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
                },

                {
                    author: "Mark Twain",
                    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
                },

                {
                    author: "Audre Lorde",
                    quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
                },

            ]


        };
        this.randomQuote = this.randomQuote.bind(this);
    }



    randomQuote() {
        let choice = Math.floor(Math.random() * this.state.quotes.length);
        let author = this.state.quotes[choice].author;
        let quote = this.state.quotes[choice].quote;

        this.setState({current_author: author, current_quote: quote})
    }


    render() {
        return (

            <div id="quote-box" className="jumbotron">
                <h1 className="display-4">Random Quote Generator</h1>
                <p id="text" className="lead"> <FontAwesomeIcon icon={faQuoteLeft}/> {this.state.current_quote} <FontAwesomeIcon icon={faQuoteRight}/></p>
                <hr className="my-4"/>
                    <p id="author"> -- {this.state.current_author} </p>
                    <a className="btn btn-primary btn-lg mx-2" href="#" role="button" onClick={this.randomQuote}><FontAwesomeIcon icon={faDice}/> New Quote</a>
                    <a className="btn btn-primary btn-lg" href={"http://twitter.com/home?status=" + escape(this.state.current_quote + "--" + this.state.current_author)} role="button"><FontAwesomeIcon icon={faTwitter}/> Tweet Quote</a>
            </div>
        );
    }
}

Quote.propTypes = {};

export default Quote;