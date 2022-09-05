import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        heads: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/780px-2006_Quarter_Proof.png',
        tails: 'https://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
    }

    constructor(props) {
        super(props);

        this.renderFace = this.renderFace.bind(this);
    }

    renderFace() {
        return (this.props.face === 'heads' ? this.props.heads : this.props.tails);
    }

    render() {
        console.log(this.props.heads)
        return (
            
            <div>
                <img className="coin" src={this.renderFace()} alt=""></img>
            </div>
        );
    }
}

export default Coin;