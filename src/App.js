import React, { Component } from 'react';
import './App.css';
import Add from './components/addtask';
import List from './components/todolist';

class App extends Component{
  state = {
    tasks: [
      
    ]
  }
  deleteTask = (id) => {
    let tasks = this.state.tasks.filter( task => {
      return task.id !== id
    })
    this.setState({ tasks })
    window.localStorage.setItem('task',JSON.stringify(tasks))
  }
  toggleTask = (id) => {
    this.setState(
      (prevState) => {
        let toggeledTasks = prevState.tasks.map(task => {
          if (task.id === id) {
            return { ...task, status: !task.status }
          }
          return task
        })
        return { tasks: toggeledTasks }
      },
      () => { window.localStorage.setItem('task', JSON.stringify(this.state.tasks)) }
    )
  }
  addTask = (task) => {
    const newTask = {
      id:Date.now(),
      text: task.task,
      status:false,
    }
    this.setState(
      (prevState) => {
        return { tasks: [...prevState.tasks, newTask] }
      },
      () => { window.localStorage.setItem('task', JSON.stringify(this.state.tasks)) }
    )
  }
  componentDidMount(){
    if (window.localStorage.getItem("task") !== null) {
      let tasks = window.localStorage.getItem(`task`);
      let parsedTasks = JSON.parse(tasks);
      this.setState(() => ({tasks:parsedTasks}))
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="min-h-screen w-full flex items-center justify-center bg-[#500000]">
          <div className='bg-[#591F1F] w-[85%] flex flex-col gap-2 m-auto p-8 rounded-2xl m-10'>
            <Add addTask={this.addTask} />
            <List tasks={this.state.tasks} deleteTask={this.deleteTask} toggleTask={ this.toggleTask } />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
        
export default App;