import React from "react";
import CountComponent from "./components/CountComponent";
import "./components/css/style.css";
import IterableComponent from "./components/IterableComponentStructure";
import IndexComponent from "./components/IndexComponent";
import FormComponent from "./components/FormComponent";
import LifeCycleMessage from "./components/LifeCycleMessage";
import MountingPhase from "./components/MountingPhase";
import UpdatingPhase from "./components/UpdatingPhase";
import UnmountingPhase from "./components/UnmountingPhase";
import ErrorHandlingPhase from "./components/ErrorHandlingPhase";
import RefDemo from "./components/RefDemoComponent";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            names: [ "Max", "Steven", "Evan" ],
        };
    };

    onClickChangeNames = (newListOfNames) => {
        this.setState({ names: newListOfNames });
    };

    onClickIncrementCount = () => {
        // function argument for setState
        // this.setState(prevState => {
        //     return { count: prevState.count + 1 };
        // });
        // using non-function argument for setState
        this.setState({ count: this.state.count + 1 });
    };

    onClickDecrementCount = () => {
        this.setState(prevCount => {
            return { count: prevCount.count - 1 };
        });
    };

    render() {
        const { count } = this.state;
        const globalRenderTextColor = {
            color: "white"
        };

        return (
            <main className="main-container">
                <section className="countSection">
                    <header className="headerCountComponent">
                        <h1>UseState Class-based-Component</h1>
                        <h3>Count Component</h3>
                        <a href="" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                    </header>
                    <div className="countComponent">
                        <CountComponent 
                            count={ count } 
                            incrementFunc={ this.onClickIncrementCount } 
                            decrementFunc={ this.onClickDecrementCount }
                        />
                    </div> 
                    <div>
                        <IterableComponent 
                            names={ this.state.names }
                            newNamesFunc={ this.onClickChangeNames }
                        />
                        <div>
                            <IndexComponent textColor={globalRenderTextColor}/>
                        </div>
                    </div>
                    <div>
                        <FormComponent textColor={globalRenderTextColor}/>
                    </div>
                    <div>
                    <h1 style={{...globalRenderTextColor, textAlign: "center"}}>LifeCycle Methods</h1>
                        <LifeCycleMessage textColor={globalRenderTextColor} />
                    </div>
                    <div>
                        <MountingPhase textColor={globalRenderTextColor}/>
                    </div>
                    <div>
                        <UpdatingPhase textColor={globalRenderTextColor} />
                    </div>
                    <div>
                        <UnmountingPhase textColor={globalRenderTextColor}/>
                    </div>
                    <div>
                        <ErrorHandlingPhase textColor={globalRenderTextColor}/>
                    </div>
                    <hr style={{color: "white", width: "100%", border: "5px dashed aliceblue"}}/>
                    <div>
                        <h1 style={{...globalRenderTextColor, textAlign: "center"}}>UseRef Classed-Based Tutorial</h1>
                        <RefDemo textColor={globalRenderTextColor} />
                    </div>
                </section>
            </main>
        );
    };
};