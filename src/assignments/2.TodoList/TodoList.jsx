import { useState } from 'react'
import './css/TodoList.css'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list-container">
      <h1 className="todo-title">My Todo List</h1>
      <TodoForm 
        todos={todos}
        setTodos={setTodos}
      />
      <div className="todo-items-container">
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No todos yet. Add one above!</p>
          </div>
        ) : (
          <div className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList
