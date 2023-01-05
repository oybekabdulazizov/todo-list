import React, { Component } from 'react';
import './Todo.css';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false, 
            task: this.props.task
        };

        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    handleRemove(evt) {
        this.props.removeTodo(this.props.id);
    }

    handleEdit(evt) {
        evt.preventDefault();

        if (this.state.task) {
            this.props.editTodo(this.props.id, this.state.task);
        }

        this.toggleEditForm();
    }

    handleChange(evt) {
        this.setState(currState => ({
            [evt.target.name]: evt.target.value
        }));
    } 

    toggleCompletion(evt) {
        this.props.completeTodo(this.props.id);
    }

    toggleEditForm() {
        this.setState(currState => ({ 
            isEditing: !currState.isEditing
         }));
    }

    renderedResult() {
        let classCompleted = (this.props.completed ? "completed" : "");
        if (this.state.isEditing) {
            return <div className="Todo">
                    <form onSubmit={this.handleEdit}>
                        <div>
                            <input
                                name="task"
                                id="task"
                                value={this.state.task}
                                onChange={this.handleChange}
                            />
                            <button>Save</button>
                        </div>
                    </form>
                </div>;
        } else {
            return <div className="Todo">
                    <li onClick={this.toggleCompletion} className={classCompleted}>{this.props.task}</li>
                    <div>
                        <button className="Todo-btn" onClick={this.toggleEditForm}><FontAwesomeIcon className="icon" icon={faPen} /></button>
                        <button className="Todo-btn" onClick={this.handleRemove}><FontAwesomeIcon className="icon" icon={faTrash} /></button>
                    </div>
                </div>
        }
    }

    render() {
        return (
            this.renderedResult()
        )
    }
}

export default Todo;