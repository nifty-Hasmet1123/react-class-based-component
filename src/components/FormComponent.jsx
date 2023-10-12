import React from "react";

class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            comments: "",
            topic: "react", // set default select option
        };
    };

    onChangeSetUsername = (event) => {
        this.setState({
            username: event?.target?.value
        }, () => {
            this.state.username.length <= 10 && 
            console.log(this.state.username);
        });
    };

    onChangeSetComment = (event) => {
        this.setState({
            comments: event?.target?.value
        }, () => {
            this.state.comments.length <= 20 &&
            console.log(this.state.comments);
        });
    };

    onChangeSetTopic = (event) => {
        this.setState({
            topic: event?.target?.value
        }, () => {
            console.log(`Current selection: ${this.state.topic}`);
        });
    };

    // adding onSubmit button put this on form tag
    onSubmitForm = (event) => {
        event.preventDefault();

        const { username, topic, comments } = this.state;
        alert( 
            `Submitted! Username: ${username}, Topic: ${topic}, Comments: ${comments}` 
        );
    };

    render() {
        const { textColor } = this.props;
        const { username, comments, topic } = this.state

        return (
            <React.Fragment>
                <form style={textColor} onSubmit={this.onSubmitForm}>
                    <div>
                        <label htmlFor="formUsername">Username: </label>
                        <input 
                            type="text" 
                            id="formUsername" 
                            value={username} 
                            onChange={this.onChangeSetUsername}
                        />
                    </div>
                    <div>
                        <label htmlFor="formTextArea">Comments: </label>
                        <div>
                            <textarea 
                                name="" 
                                id="formTextArea" 
                                cols="20" 
                                rows="5"
                                value={comments}
                                onChange={this.onChangeSetComment}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div>
                        <select
                            id="selectForm"
                            value={topic}
                            onChange={this.onChangeSetTopic}
                        >
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
        );
    };
};

export default FormComponent;