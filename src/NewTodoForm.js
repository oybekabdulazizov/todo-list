import React, { Component } from 'react';

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
            this.props.addTodo({ ...this.state });
        }
        
        this.setState(currState => ({
            task: ""
        }));
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