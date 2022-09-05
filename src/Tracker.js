import React, { Component } from 'react';
import Coin from './Coin.js';

class Tracker extends Component {
    render() {
        return (
            <div>
                <Coin face='tails' />
            </div>
        );
    }
}

export default Tracker;