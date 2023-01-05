import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState(currState => ({
            [evt.target.name]: evt.target.value
        }));
    }

    handleSubmit(evt) {
        evt.preventDefault();
        
        if (this.state.task) {
            this.props.addTodo({ ...this.state, id: uuidv4(), completed: false });
        }
        
        this.setState(currState => ({
            task: ""
        }));
    }

    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new task</label>
                    <div>
                        <input
                            name="task"
                            id="task"
                            value={this.state.task}
                            placeholder="New task (e.g. Read a page)"
                            onChange={this.handleChange}
                        />
                        <button>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;