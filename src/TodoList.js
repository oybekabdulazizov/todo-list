import React, { Component } from 'react';
import './TodoList.css';
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
        this.complete = this.complete.bind(this);
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

    complete(id) {
        const completedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo = { ...todo, completed: !todo.completed }
            }
            return todo;
        });

        this.setState(currState => ({
            todos: completedTodos
        }));
    }

    renderedTodos() {
        return this.state.todos.map(todo => 
            <Todo 
                task={todo.task} 
                key={todo.id} 
                id={todo.id} 
                completed={todo.completed}
                removeTodo={this.remove}
                editTodo={this.edit}
                completeTodo={this.complete}
            />
            );
    }

    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-header">
                    <h2>Todo List</h2>
                    <span>Todo List app developed using React</span>
                </div>
                <NewTodoForm 
                    addTodo={this.add}
                />
                <ul className="TodoList-body">
                    {this.renderedTodos()}
                </ul>
            </div>
        )
    }
}

export default TodoList;