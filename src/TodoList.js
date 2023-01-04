import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h2>Todo List!</h2>
                <NewTodoForm />
                <ul>
                    <Todo />
                </ul>
            </div>
        )
    }
}

export default TodoList;