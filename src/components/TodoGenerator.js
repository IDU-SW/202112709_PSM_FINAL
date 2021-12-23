import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

class TodoCreater extends React.Component {

  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      nextId : 1,
      open   : false,
      text   : ""
    }
  }

  render() {
    return (
      <>
        {this.state.open && (
          <InsertFormPositioner>
            <InsertForm onSubmit={this.onSubmit}>
              <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={this.onChange}/>
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={this.onToggle} open={this.state.open}>
          <MdAdd />
        </CircleButton>
      </>
    );
  }

  onToggle() {
    this.setState({open: !this.state.open});
  }

  onSubmit(e) {
    e.preventDefault(); // 새로고침 방지

    const newTodo = {
      id: this.state.nextId,
      text: this.state.text,
      done: false
    }

    this.props.onAddTodo(newTodo)
    this.setState({ nextId : this.state.nextId + 1})
    this.setState({ open   : false })
    this.setState({ text   : "" })
  }

  onChange(e) {
    this.setState({
      text : e.target.value
    })
  }

}

export default TodoCreater;