import React from "react";

export default class ErrorHandlingPhase extends React.Component {
    render() {
        const { textColor } = this.props;
        return (
            <>
                <section style={textColor}>
                    <div>
                        <header>
                            <h1>Error Handling Phase Method:</h1>
                        </header>
                        <div className="mt-article-grid">
                            <article className="articleMountPhase articleStyling">
                                <h2>
                                    static getDerivedStateFromError(error)
                                </h2>
                                <DerivedStateFromErrorAndDidCatchError />
                            </article>
                            <article className="articleMountPhase articleStyling">
                                <h2>
                                    componentDidCatch(error, info)
                                </h2>
                                <DerivedStateFromErrorAndDidCatchError />
                            </article>
                            
                        </div>
                    </div>
                </section>
            </>
        );
    };
};

function DerivedStateFromErrorAndDidCatchError() {
    return (
        <div>
            <ul>
                <li>
                    When there is an error either during rendering, in a <br />
                    lifecycle method, or in the constructor of any child component
                </li>
            </ul>
            <footer className="footer-style">Commonly used.</footer>
        </div>
    );
};