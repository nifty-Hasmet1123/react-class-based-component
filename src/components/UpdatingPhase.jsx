import React from "react";


export default class UpdatingPhase extends React.Component {
    render() {
        const { textColor } = this.props;
        return (
            <>
                <section style={textColor}>
                    <div>
                        <header>
                            <h1>Updating Lifecycle Methods:</h1>
                        </header>
                        <div className="mt-article-grid">
                            <article className="articleMountPhase articleStyling">
                                <h2>
                                    Static getDerivedStateFromProps <br />
                                    (props, state)
                                </h2>
                                <StaticGetDeriveState />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>ShouldComponentUpdate</h2>
                                <ShouldComponentUpdate />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>Render Method</h2>
                                <RenderMethod />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>getSnapShotBeforeUpdate <br />(prevProps, prevState)</h2>
                                <GetSnapShot />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>ComponentDidUpdate <br />(prevProps, prevState, snapshot)</h2>
                                <ComponentDidUpdateMethod />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>Supposed we have 2 lifecycle components:</h2>
                                <div>
                                    <h4 className="h4-text-alignment">--Lifecycle A and Lifecycle B--</h4>
                                    <p className="artPara">
                                        Lifecycle B will be mounted on LifeCycle A.
                                    </p>
                                    <p className="artPara">
                                        The order of execution will be:
                                    </p>
                                    <ul>
                                        <li>LifeCycle A getDerivedStateFromProps</li>
                                        <li>LifeCycle A shouldComponentUpdate</li>
                                        <li>LifeCycle A render</li>
                                        <li>LifeCycle B getDerivedStateFromProps</li>
                                        <li>LifeCycle B shouldComponentUpdate</li>
                                        <li>LifeCycle B render</li>
                                        <li>LifeCycle B getSnapShotBeforeUpdate</li>
                                        <li>LifeCycle A getSnapShotBeforeUpdate</li>
                                        <li>LifeCycle B componentDidUpdate</li>
                                        <li>LifeCycle A componentDidUpdate</li>
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

function StaticGetDeriveState() {
    return (
        <div>
            <ul>
                <li>Method is called every time a component is rendered.</li>
                <li>Set the state.</li>
                <li>Do not cause side effects.</li>
            </ul>
            <footer className="footer-style">
                Rarely used in the updating phase.
            </footer>
        </div>
    );
};

function ShouldComponentUpdate() {
    return (
        <div>
            <ul>
                <li>Dictates if the compoent should re-render or not.</li>
                <li>Performance optimization.</li>
                <li>Do cont cause side-effects <br />
                    <span className="cAs">
                        Ex. HTTP requests and calling the setState method.
                    </span>
                </li>
            </ul>
            <footer className="footer-style">Rarely used in the updating phase.</footer>
        </div>
    );
};

function RenderMethod() {
    return (
        <div>
            <ul>
                <li>Only required method.</li>
                <li>Read props & state and return JSX.</li>
                <li>
                    Do not change state or interact with DOM or make <br />
                    ajax calls.
                </li>
            </ul>
            <footer className="footer-style">Always used in updating phase.</footer>
        </div>
    );
};

function GetSnapShot() {
    return (
        <div>
            <ul>
                <li>
                    Called right before the changes from the virtual DOM <br />
                    are to be reflected in the DOM.
                </li>
                <li>Capture some information from the DOM.</li>
                <li>
                    Method will either return null or return a value. <br />
                    Returned value will be passed as the third parameter <br />
                    to the next method.
                </li>
            </ul>
            <footer className="footer-style">Rarely used in the updating phase.</footer>
        </div>
    );
};

function ComponentDidUpdateMethod() {
    return (
        <div>
            <header>Guaranteed to be only called once.</header>
            <ul>
                <li>Called after the render is finished in the re-render cycles.</li>
                <li>
                    Can use side-effects such as ajax calls.
                    <aside className="aside-cl">
                        --But before making the call you need to compare <br />
                        the previous prop with the new prop then decide whether to make <br />
                        an ajax call.
                    </aside>
                </li>
            </ul>
            <footer className="footer-style">Commonly used in update lifecycle.</footer>
        </div>
    );
};