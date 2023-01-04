import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.add = this.add.bind(this);
    }

    add(newTodo) {
        this.setState(currState => ({
            todos: [ ...currState.todos, newTodo ]
        }));
    }

    renderTodos() {
        return this.state.todos.map(todo => 
            <Todo 
                task={todo.task} 
            />
            );
    }

    render() {
        return (
            <div>
                <h2>Todo List!</h2>
                <NewTodoForm 
                    addTodo={this.add}
                />
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}

export default TodoList;