import './AssignmentNavigation.css'

const AssignmentNavigation = ({ assignments, currentAssignment, onSelectAssignment }) => {
  return (
    <nav className="assignment-nav">
      <div className="nav-container">
        <h1 className="nav-title">React Training Assignments</h1>
        <div className="assignment-buttons">
          {assignments.map((assignment) => (
            <button
              key={assignment.id}
              className={`nav-button ${currentAssignment === assignment.id ? 'active' : ''}`}
              onClick={() => onSelectAssignment(assignment.id)}
            >
              <span className="button-number">{assignment.id}</span>
              <span className="button-title">{assignment.title}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default AssignmentNavigation
