import './css/TodoItem.css'

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
    </div>
  )
}

export default TodoItem
