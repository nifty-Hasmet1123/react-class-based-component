import "./css/style.css";
import React from "react";

// function component here

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incrementMessage: "",
            decrementMessage: ""
        };
    };

    incrementCombinedFunction = () => {
        this.setState({ incrementMessage: "incrementing" });
        this.props.incrementFunc();
    };

    decrementingCombinedFunction = () => {
        this.setState({ decrementMessage: "decrementing" });
        this.props.decrementFunc();
    };

    clearIncrementMessage = () => {
        this.setState({ incrementMessage: "" });
    };

    clearDecrementMessage = () => {
        this.setState({ decrementMessage: "" })
    };

    // using componentDidMount like useEffect
    componentDidMount() {
        this.incrementMessageInterval = setInterval(this.clearIncrementMessage, 7000);
        this.decrementMessageInterval = setInterval(this.clearDecrementMessage, 7000);
    };

    // return statement of useEffect
    componentWillUnmount() {
        clearInterval(this.incrementMessageInterval);
        clearInterval(this.decrementMessageInterval);
    };

    render() {
        const { count } = this.props;
        const { incrementMessage, decrementMessage } = this.state;

        return (
            <>  
                <p>{ decrementMessage }</p>
                <button onClick={ this.decrementingCombinedFunction } className="countButtons"> - </button>
                <span className="countSpan"> {count} </span>
                <button onClick={ this.incrementCombinedFunction } className="countButtons">+</button>
                <p>{ incrementMessage }</p>
            </>
        );
    };
};


