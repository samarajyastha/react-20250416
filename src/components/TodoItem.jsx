import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [text, setText] = useState(todo.name);
  const [isEditing, setIsEditing] = useState(false);

  function saveEdit() {
    updateTodo(todo.id, { ...todo, name: text.trim() });

    setIsEditing(false);
  }

  return (
    <div
      className={`bg-white my-2 rounded-lg px-4 py-2 flex items-center justify-between gap-3 ${
        todo.isComplete ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() =>
          updateTodo(todo.id, { ...todo, isComplete: !todo.isComplete })
        }
      />
      <input
        type="text"
        value={text}
        disabled={!isEditing}
        className={`${todo.isComplete ? "line-through" : ""} ${
          isEditing ? "border-2" : ""
        } w-full px-2 border-slate-300 rounded`}
        onKeyDown={(e) => e.key == "Enter" && saveEdit()}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-100 px-2 py-1 shadow hover:bg-blue-200 rounded"
        onClick={() => setIsEditing(true)}
      >
        ✏️
      </button>

      <button
        className="bg-red-100 px-2 py-1 shadow hover:bg-red-200 rounded"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
