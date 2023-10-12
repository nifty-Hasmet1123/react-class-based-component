import React from "react";


export default class IterableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            changed: false,
        };
    };

    // change name toggle
    changeNames = () => {
        if (this.state.changed) {
            this.props.newNamesFunc([ "Max", "Steven", "Evan" ]);
        } else {
            this.props.newNamesFunc([ "Mickey", "John", "Snow" ]);
        };

        // toggle the changed state;
        // toggle syntax true/false 
        this.setState({ changed: !this.state.changed });
    }

    render() {
        // class based components automatically have props
        const { names } = this.props;
        const buttonChange = (
            !this.state.changed ? "Click to change new list of names":
            "Revert back to the original list of names"
        );
                            
        return (
            <>
                {
                    !!names && 
                    names.map((name, index) => <ShowIterableNamesComponent key={index} name={name}/>)
                }
                <button onClick={ this.changeNames }>
                    { buttonChange }
                </button>
            </>
        );
    };
};


// seperated to component for displaying iterables
function ShowIterableNamesComponent(props) {
    return (
        <p className="p-iterable"> 
            { props.name } 
        </p>
    );
};
