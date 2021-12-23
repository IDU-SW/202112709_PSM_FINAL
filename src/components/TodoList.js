import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

class TodoList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TodoListBlock>
        {
          this.props.todos.map( (v) => {
            return <TodoItem item={v} onDelete={() => this.props.onDelete(v.id)} onUpdate={this.props.onUpdate} />
          })
        }
      </TodoListBlock>
    );
  }
}

export default TodoList;