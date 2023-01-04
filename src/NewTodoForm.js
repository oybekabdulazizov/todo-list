import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState(currState => ({
            [evt.target.name]: evt.target.value
        }));
    }

    handleSubmit(evt) {
        evt.preventDefault();
        // Todo: create a function to manage adding a new todo/task
        
        // clear the form after the submission/addition 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new task</label>
                    <input 
                        name="task" 
                        id="task" 
                        value={this.state.task}
                        placeholder="New task (e.g. Read a page)"
                        onChange={this.handleChange} 
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;