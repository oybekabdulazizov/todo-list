import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h2>Todo List!</h2>
                <ul>
                    <Todo />
                </ul>
            </div>
        )
    }
}

export default TodoList;