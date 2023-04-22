import React, { useState } from "react";
import "./Body2.css";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setTodo(event.target.value);
    setHistory([...history, inputValue]);
    setInputValue("");
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!todo) return;
    setTodos([...todos, { text: todo, done: false }]);
    setTodo("");
  };

  const handleTodoClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="scrollable main-container" id="about">
      <div className="containerwrap blue">
        <div className="container">
          <h1 className="todolist">Todo List</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Add Todo..."
              value={todo}
              onChange={handleInputChange}
            />
            <button type="submit">Add</button>
          </form>
          <ul className="hasil">
            {todos.map((todo, index) => (
              <li key={index} className={todo.done ? "done" : ""}>
                <span onClick={() => handleTodoClick(index)}>{todo.text}</span>
                <div>


                  <button
                    className="corrected"
                    onClick={() => handleTodoClick(index)}
                  >
                    {todo.done ? "Undo" : "Done"}
                  </button>


                  <button
                    className="delete"
                    onClick={() => handleTodoDelete(index)}
                  >
                    Delete
                  </button>
                  <div className="history-container">
                    <button
                      className="history-button"
                      onClick={() => setShowHistory(!showHistory)}
                    >
                      Show history
                    </button>

                    
                    {showHistory && (
                      <div>
                        <form classname="formstory"onSubmit={handleInputChange}>
                          <input
                            type="textstory"
                            value={inputValue}
                            onChange={(event) =>
                              setInputValue(event.target.value)
                            }
                          />
                          <button type="story">Add History</button>
                        </form>
                        <ul className="bawah">
                          {history.map((item) => (
                            <li classname="historyitem" key={""}>
                              {item}
                              
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
