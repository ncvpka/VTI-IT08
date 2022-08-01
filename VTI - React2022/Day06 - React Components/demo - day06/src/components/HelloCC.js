import { Component } from "react";

class HelloCC extends Component {
    render() {
        return (
            <h1>Hello, {this.props.person}</h1>
        )
    }
}
export default HelloCC;