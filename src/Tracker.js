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

        this.handleClick = this.handleClick.bind(this);
    }

    rng() {
        return Math.floor(Math.random() * 2);
    }

    returnFace() {
        const faces = ['heads', 'tails'];
        return faces[this.rng()];
    }

    flip() {
        const newFace = this.returnFace();

        this.setState(
            oldState => {
                return {
                    face: newFace,
                    flipsCount: oldState.flipsCount + 1,
                    headsCount: oldState.headsCount + (newFace === 'heads' ? 1 : 0),
                    tailsCount: oldState.tailsCount + (newFace === 'tails' ? 1 : 0)
                }
            }
        )
    }

    handleClick(e) {
        this.flip();
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin face={this.state.face} />
                <button onClick={this.handleClick}>FLIP HERE</button>
                <p>Out of {this.state.flipsCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.</p>
            </div>
        );
    }
}

export default Tracker;