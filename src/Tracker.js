import React, { Component } from 'react';
import Coin from './Coin.js';

class Tracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            face: null,
            headsCount: 0,
            tailsCount: 0,
            flipsCount: 0
        }
    }

    rng() {
        return Math.floor(Math.random() * 2);
    }

    returnFace() {
        const faces = ['heads', 'tails'];
        return faces[this.rng()];
    }

    flip() {
        const face = this.returnFace();


    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin face={this.returnFace()} />
                <button>FLIP HERE</button>
                <p>Out of {this.state.flipsCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.</p>
            </div>
        );
    }
}

export default Tracker;