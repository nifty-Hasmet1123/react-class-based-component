import React from "react";
import "./css/style.css";

export default class MountingPhase extends React.Component {
    render() {
        const { textColor } = this.props;

        return (
            <>
                <section style={textColor}>
                    <div>
                        <header>
                            <h1>Mounting Lifecycle Methods:</h1>
                        </header>
                        <div className="mt-article-grid">
                            <article className="articleMountPhase articleStyling">
                                <h2>Constructor(props)</h2>
                                <ConstructorArticle />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>Static getDerivedStateFromProps <br />(props, state)</h2>
                                <DerivedState />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>Render Method</h2>
                                <RenderMethod />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>ComponentDidMount Method</h2>
                                <ComponentDidMountMethod />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>Supposed we have 2 lifecycle components:</h2>
                                <div>
                                    <h4 className="h4-text-alignment">--Lifecycle A and Lifecycle B--</h4>
                                    <p className="artPara">
                                        Lifecycle B will be mounted on LifeCycle A
                                    </p>
                                    <p className="artPara">
                                        The order of execution will be:
                                    </p>
                                    <ul>
                                        <li>LifeCycle A constructor</li>
                                        <li>LifeCycle A getDerivedStateFromProps</li>
                                        <li>LifeCycle A render</li>
                                        <li>LifeCycle B constructor</li>
                                        <li>LifeCycle B getDerivedStateFromProps</li>
                                        <li>LifeCycle B render</li>
                                        <li>LifeCycle B componentDidMount</li>
                                        <li>LifeCycle A componentDidMount</li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </>
        );
    };
};

// constructor lifecycle
function ConstructorArticle() {
    return (
        <div>
            <ul>
                <li>A special function that will get called whenever a new component is created.</li>
                <li>
                    Perfect for initializing state binding the event handlers
                    <aside className="aside-C">Note: Binding event handlers is now removed in the current version of react.</aside>
                </li>
                <li>
                    Do not cause side effects during this phase. 
                    Example: <span className="cAs">HTTP REQUEST</span>.
                </li>
            </ul>
            <h4>Two Important factors when defining a constructor:</h4>
            <ul>
                <li>
                    You have to call a special function called <span className="cAs"> super(props).</span><br />
                    Directly overwrite <span className="cAs">this.state.</span>
                </li>
                <li>
                   Constructor is the only place where you are expected to change or set <br />
                   the state by directly overwriting <span className="cAs">this.state attribute</span>
                </li>
            </ul>
        </div>
    );
};

// static getDerivedStateFromProps
function DerivedState() {
    return (
        <div>
            <h1>A Rarely Used Lifecycle Method</h1>
            <ul>
                <li>When the state of the component depends on changes in props over time</li>
                <li>Set the state</li>
                <li>Do not cause side effects <span className="cAs">Ex: HTTP REQUEST</span></li>
            </ul>
        </div>
    );
}; 

// render method
function RenderMethod() {
    return (
        <div>
            <ul>
                <li>The only Required Method in class based component</li>
                <li>Read props & state and return JSX</li>
                <li>
                    Do not change state or interact with DOM or make ajax calls.
                </li>
                <li>
                    Children components lifecycle methods are also executed.
                </li>
            </ul>
        </div>
    );
};

// componentDidMount 
function ComponentDidMountMethod() {
    return (
        <div>
            <h4>Called only once on the whole lifecycle method</h4>
            <ul>
                <li>
                    Invoked immediately after a component and all its children <br />
                    components have been rendered to the DOM.
                </li>
                <li>
                    Perfect place to cause side-effects. <br />
                    <span className="cAs">
                        Ex. Interact with the DOM or perform
                        any ajax calls to load data.
                    </span>
                </li>
            </ul>
        </div>
    );
};
