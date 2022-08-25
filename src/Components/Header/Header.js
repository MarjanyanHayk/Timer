import React from "react";

import "./Header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 5000 };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //   alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value)
    }

    render() {
        return (
            <div className='Header'>
                <h1>Timer</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Select Time In Milliseconds Please!!!:
                        <input type="text" value={this.state.value} 
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Header;