import React from 'react'
import Btn from './Components/Button/Btn'
import Input from './Components/Input/Input'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTask, RemoveTask, EditTask } from './Components/CreateSlice/TodoSlice'

function TODO() {
  const dispatch = useDispatch()
  const task = useSelector((state) => state.Todo.Task)
  // console.log(task);
  const [editId, setEditId] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    const newTask = {
      id: Date.now(),
      task: inputValue
    }
    dispatch(AddTask(newTask));
    e.target.userInput.value = ''
  };

  const removeTask = (e) => {
    dispatch(RemoveTask(e))
  }

  const handleEditTask = (task) => {
    setEditId(task.id);
    setInputValue(task.task);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    const editedTask = {
      id: editId,
      task: inputValue
    };
    dispatch(EditTask(editedTask));
    setEditId('');
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <Input action={handleInputChange} />
        <Btn type="submit" BtnName="ADD" />
      </form>

      {task.map((task) => (
        <div key={task.id}>
          {editId === task.id ? (
            <form onSubmit={handleSaveTask}>
              <Input value={task.task} action={handleInputChange} />
              <Btn type="submit" BtnName="Save" />
            </form>
          ) : (
            <div>
              <span>{task.task}</span>
              <Btn BtnAction={() => removeTask(task.id)} BtnName="Delete" />
              <Btn BtnAction={() => handleEditTask(task)} BtnName="Edit" />
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default TODO
