import { useState } from 'react'
import './css/TodoForm.css'

const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todoInput.trim()
      }
      setTodos([...todos, newTodo]);
      setTodoInput('');
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn" disabled={!todoInput.trim()}>
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm
