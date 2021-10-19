import React, { Component } from 'react';

import '../styles/form.css'

export default class form extends Component {

    getData = e => {
        this.props.getData(e)
    }

    renderButton = () => {
        if (this.props.save){
            return(
                <button 
                    className="btn waves-effect waves-light"
                    type="submit" 
                    onClick={this.props.addTask}>
                        <i className="material-icons right">send</i>
                        Add Task
                </button>
            )
        }
        else {
            return(
                <button 
                    className="btn waves-effect waves-light"
                    type="submit" 
                    onClick={e => this.props.editTask(e)}>
                        <i className='material-icons right'>edit</i>
                        Save Task
                </button>
            )
        }
    }

    render() {
        return (
            <div className="row" style={{margin: '1em'}}>
                <div className="col s12 m5">
                    <form 
                        className='card small blue-grey darken-1'
                        onSubmit={e => e.preventDefault()}>
                        <div className='card-content'>
                            <div className='input-field col s6'>
                                <input 
                                    name='title'
                                    type='text'
                                    placeholder='Task Name'
                                    className='grey-text text-lighten-1'
                                    value={this.props.state.title} 
                                    onChange={e => this.getData(e)}/>
                                <label htmlFor="task_title">Task Title</label>
                            </div>
                            <div className='input-field col s12'>
                                <textarea 
                                    name='description' 
                                    placeholder='Task Description'
                                    className='materialize-textarea grey-text text-lighten-1'
                                    value={this.props.state.description} 
                                    onChange={e => this.getData(e)}>
                                </textarea>
                                <label htmlFor="task_description">Task Description</label>
                            </div>
                        </div>
                        <div className='card-action'>
                            {this.renderButton()}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
