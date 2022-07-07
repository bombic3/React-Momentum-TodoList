import TodoListItem from './TodoListItem';
import './TodoList.scss';
import React from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className='TodoList'>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);