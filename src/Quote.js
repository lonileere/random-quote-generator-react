import React, {Component} from 'react';
import './Quote.css'
import PropTypes from 'prop-types';

class Quote extends Component {
    constructor(props) {
        super(props);

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
            <div id="quote-box">
            <div id="text"></div>
                <div id="author"></div>
                <button id="new-quote"> New Quote</button>
                <button id="tweet-quote"> Tweet </button>
            </div>
        );
    }
}

Quote.propTypes = {};

export default Quote;