import React from "react";
import text from "./assets/unMount-notes.txt";
import codes from "./assets/unMountCodeSnippet.txt";
import "./css/style.css";

export default class UnmountingPhase extends React.Component {
    constructor() {
        super();
        this.textAreaRef = React.createRef();
        this.textAreaRefCode = React.createRef();
        this.state = {
            currentWidth: window.innerWidth,
            textContent: "",
            codeContent: "",
        };
    };

    handleWidth = () => {
        this.setState({ currentWidth: window.innerWidth });
    };

    componentDidMount() {
        // get the text and code content from txt file
        const request = async () => {
            const response = await fetch(text);
            const response2 = await fetch(codes)
            const textResponse = await response.text();
            const codeResponse = await response2.text();

            this.setState({
                textContent: textResponse,
                codeContent: codeResponse
            });
        };
        
        request();
        window.addEventListener("resize", this.handleWidth);
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWidth);
    };

    onClickGenerate = (argsOptions) => {
        if (argsOptions === "notes") {
            this.textAreaRef.current.textContent = this.state.textContent;
        } else if (argsOptions === "codes") {
            this.textAreaRefCode.current.textContent = this.state.codeContent;
        };
    };

    render() {
        const { textColor } = this.props;
        const textAreaColumnSize = this.state.currentWidth <= 953 ? "58": "120";

        return (
            <>
                <section style={textColor}>
                    <div>
                        <header>
                            <h1>Unmounting Phase Method:</h1>
                        </header>
                        <div className="mt-article-grid">
                            <article className="articleMountPhase articleStyling">
                                <h2>
                                    componentWillUnmount()
                                </h2>
                                <ComponentWillUnmountMethod />
                            </article>
                        </div>
                    </div>
                    <div className="fieldsetBox">
                        <FieldSetComponent
                            refHook={ this.textAreaRef } 
                            generateText={ this.onClickGenerate }
                            columnSize={ textAreaColumnSize }
                            condition={1}
                        />
                    </div>
                    <div className="fieldsetBox">
                        <FieldSetComponent
                            refHook={ this.textAreaRefCode } 
                            generateText={ this.onClickGenerate }
                            columnSize={ textAreaColumnSize }
                            condition={2}
                        />
                    </div>
                </section>
            </>
        );
    };
};

function FieldSetComponent({ refHook, generateText, columnSize, condition }) {
    return condition === 1 ?
        <fieldset className="fieldSet">
            <legend className="legendFs">When to use Unmounts?</legend>
            <label htmlFor="unmountTips">Unmount Tips:</label>
            <textarea ref={ refHook } id="unmountTips" cols={ columnSize } rows="30" readOnly></textarea>
            <button onClick={ () => generateText("notes") }>Click to generate notes</button>
        </fieldset>
        :
        <fieldset className="fieldSet">
            <legend className="legendFs">Unmounting Phase Code Snippet</legend>
            <label htmlFor="unmountCodeSnippet">Generate Code: </label>
            <textarea ref={refHook} id="unmountCodeSnippet" cols={columnSize} rows="30" readOnly></textarea>
            <button onClick={ () => generateText("codes") }>Click to generate codes</button>
        </fieldset>
};

function ComponentWillUnmountMethod() {
    return (
        <div>
            <ul>
                <li>
                    Method is invoked immediately before a component is <br />
                    unmounted and destroyed.
                </li>
                <li>
                    Cancelling any network requests, removing event handlers <br />
                    , cancelling any subscriptions and also invalidating timers.
                </li>
                <li>Do not call the setState method.</li>
            </ul>
            <footer className="footer-style">Commonly used, depending on the mount.</footer>
        </div>
    );
};