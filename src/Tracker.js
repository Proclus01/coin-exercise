import React, { Component } from 'react';
import Coin from './Coin.js';

class Tracker extends Component {
    render() {
        return (
            <div>
                <Coin face='heads' />
            </div>
        );
    }
}

export default Tracker;