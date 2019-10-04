import * as React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        };
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decriment() {
        this.setState({count: this.state.count - 1});
    }

    say(counter) {
        alert(`Current count ${counter}`);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col btn-group btn-group-sm">
                        <button className="btn btn-sm btn-outline-info" onClick={ () => this.increment()}>+</button>
                        <button className="btn btn-sm btn-outline-info" onClick={ () => this.decriment()}>-</button>
                        <button className="btn btn-sm btn-warning" onClick={ () => this.say(this.state.count)}>NameIt!</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">{this.state.count}</div>
                </div>
            </div>
        );
    }
}
