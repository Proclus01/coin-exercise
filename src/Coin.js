import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    constructor(props) {
        super(props);

        this.heads = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/780px-2006_Quarter_Proof.png';
        this.tails = 'https://www.pcgscoinfacts.com/UserImages/71009269r.jpg';

    }

    render() {
        return (
            
            <div>
                <img className="coin" src={
                    ( this.props.face !== null 
                        ? (this.props.face === 'heads' ? this.heads : this.tails)
                        : 'none'
                    )
                    
                    } alt="" />
            </div>
        );
    }
}

export default Coin;