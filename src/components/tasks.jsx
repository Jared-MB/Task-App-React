import React, { Component } from 'react'

export default class tasks extends Component {
    render() {
        return (
            <div className='row' style={{margin: '2em'}}>
                <table className='col s12 m12'>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map(task => 
                            <tr key={task.id} id={task.id}>
                                <td className="taskName">{task.title}</td>
                                <td className="taskDescription">{task.description}</td>
                                <td className='center'>
                                    <button 
                                        onClick={() => {
                                            this.props.changeState(task.id, task.title, task.description)
                                        }}
                                        className='btn'>
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button 
                                        onClick={() => {
                                            this.props.deleteTask(task.id)
                                        }}
                                        className='btn'
                                        style={{margin : '1em'}}>
                                        <i className="material-icons">delete</i>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
