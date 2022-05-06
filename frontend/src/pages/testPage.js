import React, { useState, Component, setState } from "react";
import "../StyleSheets/ProfilePage.css"
import "../StyleSheets/LoginForm.css"
import task from "../utils/task";

class TestPage extends React.Component {

    state = {
        url: ""
    }

    submitURL = s => {
        s.preventDefault();
        console.log(this.state.url);
        task.getRemoteImage(this.state.url);
    }

    render() {
        return (
            <form className="form-inner" onSubmit={this.submitURL}>
                <div>
                    <div>
                        <input className="textbox" placeholder="image url" name="imageurl" id="imageurl" onChange={s => this.setState({url: s.target.value })} value={this.state.url} />
                        <button className="submit" onClick={this.submitURL} > Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TestPage;