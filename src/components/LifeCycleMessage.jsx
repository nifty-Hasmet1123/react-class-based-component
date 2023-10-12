const LifeCycleMessage = ({ textColor }) => {
    const lifeCycleMethod = [ "Mounting", "Updating", "Unmounting", "Error Handling" ];
    const lifeCycleMethodMessage = [
        "When an instance of a component is being created and inserted into the DOM",
        "When a component is being re-rendered as a result of changes to either its props or state",
        "When a component is being removed from the DOM",
        "When there is an error during rendering, in a lifecycle method, or in the constructor of any child component"
    ];
    const availableMethod = [
        "constructor, static, getDerivedStateFromProps, render and componentDidMount",
        "static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, and componentDidMount",
        "componentWillUnmount",
        "static getDerivedStateFromError and componentDidCatch"
    ];

    const liTags = lifeCycleMethod.map((method, index) => {
        return <li key={index}> 
            <span style={{ fontWeight: "700" }}>{ method }</span> - { lifeCycleMethodMessage[index] }
            <div style={{ display: "flex" }}>
                <h5>Available Class Methods : </h5>
                <p style={{ marginLeft: "10px", fontSize: "15px", fontWeight: "700", marginTop: "21px" }}>
                    { availableMethod[index] }
                </p>
            </div>
        </li>
    });

    return (
        <>
            <section style={ textColor }>
                <header>
                    <h1>4 phases of Lifecycle Method:</h1>
                </header>
                <div>
                    <ul>
                        { liTags }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default LifeCycleMessage;