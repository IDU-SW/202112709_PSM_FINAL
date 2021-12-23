import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

class TodoHead extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const date = new Date();

    return (
      <TodoHeadBlock>
        <h1>{this.getCurrentTime(date)}</h1>
        <div className="day">{this.getWeekOfDay(date)}</div>
        <div className="tasks-left">{this.getTodoCount()}</div>
      </TodoHeadBlock>
    );
  }

  getCurrentTime(date) {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getWeekOfDay(date) {
    return date.toLocaleDateString('ko-KR', { weekday: 'long' });
  }
  
  getTodoCount() {
    const undone = this.props.todos.filter( (v) => !v.done ).length
    const allCnt = this.props.todos.length
    return `남은 할 일 ${undone}개 / 전체 할 일 ${allCnt}개`
  }
}

export default TodoHead;