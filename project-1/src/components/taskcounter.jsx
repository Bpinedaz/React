import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TaskCounter({ taskCount, onClear }) {
  return (
    <div>
      <p>You Have {taskCount} Task(s)
      
      <button onClick={onClear} style={{ color: 'red' }}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      </p>
      
    </div>
  );
}