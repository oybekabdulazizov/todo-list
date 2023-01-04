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
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    add(newTodo) {
        this.setState(currState => ({
            todos: [ ...currState.todos, newTodo ]
        }));
    }

    remove(id) {
        this.setState(currState => ({
            todos: currState.todos.filter(todo => todo.id !== id)
        }));
    }

    edit(id, editedTask) {
        const editedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo = { ...todo, task: editedTask };
            }
            return todo;
        });

        this.setState(currState => ({
            todos: editedTodos
        }));
    }

    renderedTodos() {
        return this.state.todos.map(todo => 
            <Todo 
                task={todo.task} 
                key={todo.id} 
                id={todo.id} 
                removeTodo={this.remove}
                editTodo={this.edit}
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
                    {this.renderedTodos()}
                </ul>
            </div>
        )
    }
}

export default TodoList;