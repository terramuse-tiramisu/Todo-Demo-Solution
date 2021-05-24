import React from 'react';

function Todo({ todo, done, remove, i }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        onClick={() => done(i)}
      >
        {todo.value}
      </span>
      <button onClick={() => remove(i)}>X</button>
    </li>
  );
}

export default Todo;
