import React, {Component} from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {die1: "one", die2: "two", rolling: false};
        this.roll = this.roll.bind(this);
    }
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    roll(){
        const random1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const random2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        this.setState({die1: random1, die2: random2, rolling: true});
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1500);
    }
    render(){
        return (
            <div className="RollDice">
                <Die num={this.state.die1} rolling={this.state.rolling}/>
                <Die num={this.state.die2} rolling={this.state.rolling}/>
                <div className="RollDice-button-container">
                <button onClick={this.roll} className="RollDice-button" 
                disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
                </div>
            </div>
        )
    }
}

export default RollDice;