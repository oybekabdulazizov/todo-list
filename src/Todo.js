import React, { Component } from 'react';

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
    }

    handleRemove(evt) {
        this.props.removeTodo(this.props.id);
    }

    handleEdit(evt) {
        evt.preventDefault();
        // todo: call the edit method passed through the props
        if (this.state.task) {
            this.props.editTodo(this.props.id, this.state.task);
        }
        // todo: toggle the form after the edit has been saved
        this.toggleEditForm();
    }

    handleChange(evt) {
        this.setState(currState => ({
            [evt.target.name]: evt.target.value
        }));
    } 

    toggleEditForm() {
        this.setState(currState => ({ 
            isEditing: !currState.isEditing
         }));
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = 
            <div>
                <form onSubmit={this.handleEdit}>
                    <input
                        name="task" 
                        id="task" 
                        value={this.state.task} 
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>    
            </div>;
        } else {
            result = 
            <div>
                {this.props.task}
                <button onClick={this.toggleEditForm}>Edit</button>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        }

        return (
            result
        )
    }
}

export default Todo;