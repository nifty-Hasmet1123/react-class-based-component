// class based component for Ref

import React from "react";
import text from "./assets/refCodeSnippet.txt";

export default class RefDemo extends React.Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.textAreaRef = React.createRef();
        this.state = {
            currentWidth: window.innerWidth, // set initial value of width to the current window size
            codeSnippet: "", // code snippet state from text.txt
        };
    };

    handleResize = () => {
        // set the current browser width 
        this.setState({ currentWidth: window.innerWidth });
    };

    componentDidMount() {
        // fetch the text data from text.txt from assets folder.
        // fs module doesn't work here because it is a node module.
        // cannot use async function keyword here because this is a class-based component
        const request = async () => {
            const response = await fetch(text);
            const textResponse = await response.text();

            this.setState({ codeSnippet: textResponse });
        }
        request();

        // to view what is exactly the inputRef in the console
        // we get a object type that have a key/property of `current`
        // this.inputRef.current.focus();
        console.log(this.inputRef);
        
        // add event listener for window resize
        window.addEventListener("resize", this.handleResize);
        console.log(this.state.currentWidth);
    };

    componentWillUnmount() {
        // don't forget about this to avoid memory leaks
        window.removeEventListener("resize", this.handleResize);
    };

    clickHandler = () => {
        // another useCase get the value from the users input
        alert(this.inputRef.current.value);
    };

    clickTextAreaMessage = () => {
        this.textAreaRef.current.textContent = this.state.codeSnippet;
    };

    render() {
        const { textColor } = this.props;
        // determine the textAreaColumnSize of text are based on width
        const textAreaColumnSize = this.state.currentWidth <= 953 ? "58": "120";

        return (
            <div style={textColor}>
                <div className="fieldsetBox">
                    <fieldset className="fieldSet">
                        <legend className="legendFs">Focus element here</legend>
                        <label htmlFor="refDemo">Focus Here: </label>
                        <input type="text" ref={ this.inputRef } id="refDemo"/><br />
                        <button onClick={ this.clickHandler }>Click</button>
                    </fieldset>
                </div>
                <div className="fieldsetBox">
                    <TextAreaComponent 
                        textRef={ this.textAreaRef }
                        columnSize={ textAreaColumnSize }
                        clickHandler={ this.clickTextAreaMessage }
                    />

                </div>
            </div>  
        );
    };
};

function TextAreaComponent({ textRef ,clickHandler, columnSize, condition }) {
    return (
        <fieldset className="fieldSet">
            <legend className="legendFs">UseRef Codes Here</legend>
            <label htmlFor="trefDemo">Generated code: </label>
            <textarea ref={ textRef } id="trefDemo" cols={ columnSize } rows="30" readOnly></textarea>
            <button onClick={ clickHandler }>Click me to generate code snippet</button>
        </fieldset>
    );
};