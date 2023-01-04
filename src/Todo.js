import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt) {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div>
                {this.props.task}
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        )
    }
}

export default Todo;