import React, { Component } from 'react';

import Form from './components/form';
import Tasks from './components/tasks'

export default class App extends Component {

  state = {
    title: '',
    description: '',
    id : '',
    tasks: [],
    totalTasks : 0,
    save : true
  }

  getData = e => {
    const { name, value } = e.target
    this.setState({[name] : value});
  }

  addTask = () => {
    let { title, description, tasks, totalTasks } = this.state;
    if (title === ''){
      title = `Task ${totalTasks + 1}`
    }
    if (description === ''){
      description = 'No description'
    }
    const lastValueTask = (title.length)
    tasks.push({
      title,
      description,
      id : `task${tasks.length + title[0] + lastValueTask + description[0]}`
    });
    this.setState({
      totalTasks: this.state.totalTasks + 1,
      title : '', 
      description : ''
    });
    window.M.toast({html : 'Task added successfully'})
  }

  changeState = (id, title, description) => {
    this.setState({
      save : false,
      id,
      title, 
      description,
    });
    const form = document.querySelector('form');
    form.querySelector('input').value = title;
    form.querySelector('textarea').value = description;
  }

  editTask = () => {
    let { title, description, id, tasks } = this.state
    const task = document.getElementById(id);
    task.querySelector('.taskName').textContent = title;
    task.querySelector('.taskDescription').textContent = description;
    let position = 0;
    tasks.forEach(task => {
      if (task.id === id){
        tasks[position] = {
          title, description, id
        }
      }
      position++;
    })
    this.setState({
      save : true, 
      title : '', 
      description : ''
    });
    window.M.toast({html : 'Task save successfully'})
  }

  deleteTask = id => {
    if (window.confirm('Are you sure you want to delete this task?')){
      const { tasks, totalTasks } = this.state;
      let taskDeleted
      tasks.map(task => {
        if (task.id === id){
          taskDeleted = tasks.indexOf(task)
        }
        return null;
      })
      delete tasks[taskDeleted];
      this.setState({tasks : tasks, totalTasks : totalTasks - 1})
    };
    window.M.toast({html : 'Task deleted successfully'})
  }

  render() {
    return (
      <div className='teal lighten-5' style={{minHeight : '100vh'}}>
        <header 
          className='teal darken-1 white-text'
          style={{padding : '.5em', fontSize : '2em'}}>
            Total Tasks : {this.state.totalTasks}
        </header>
        <Form 
          state={this.state} 
          getData={this.getData} 
          addTask={this.addTask} 
          save={this.state.save}
          editTask={this.editTask}/>
        <Tasks 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          changeState={this.changeState}/>
      </div>
    )
  }
}
