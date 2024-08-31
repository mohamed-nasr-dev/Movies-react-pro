import { Form, Row } from "react-bootstrap";
import { useState } from "react";
import TodoItem from "../../component/TodoItem/TodoItem";

function ToDoList() {


  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");
  function addTask(text) {
    
    const newTask = {
      id: Date.now(),
      text
    };    
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  console.log(tasks);
  


  return (
    <>
      <Row className="justify-content-center">
        <Row className="justify-content-center align-items-center my-5 col-lg-6 bg-primary">
          <h1 className="text-center">To-Do App!</h1>
          <div className="mb-3 col-9 ">
            <Form.Control as="textarea" id="exampleForm.ControlTextarea1" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="mb-3 col-3">
            <button className="btn border text-light" onClick={() => addTask(text)}>
              Add task
            </button>
          </div>
          {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
        </Row>
      </Row>
    </>
  );
}

export default ToDoList;
