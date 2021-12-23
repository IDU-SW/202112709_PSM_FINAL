import React from 'react';
import TodoContainer from './components/TodoContainer';
import TodoHeader    from './components/TodoHeader';
import TodoList      from './components/TodoList';
import TodoGenerator from './components/TodoGenerator';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.addTodo    = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

    this.state = {
      todos : []
    };
  }

  render() {
    return (
      <>
        <TodoContainer>
          <TodoHeader todos={this.state.todos}/>
          <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onUpdate={this.updateTodo}/>
          <TodoGenerator onAddTodo={this.addTodo}/>
        </TodoContainer>
      </>
    ); 
  }

  addTodo(item) {
    console.log(`"${item.text}" added. || ID id ${item.id}`);

    this.state.todos.push(item)
    this.setState({
      todos : this.state.todos
    })
  }

  deleteTodo(id) {
    const newTodos = this.state.todos.filter((v) => v.id != id)
    this.setState({ todos : newTodos })
  }

  updateTodo() {
    this.setState({ todos : this.state.todos })
  }
}

export default App;
