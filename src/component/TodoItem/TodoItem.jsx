/* eslint-disable react/prop-types */
function TodoItem({ task, deleteTask }) {
  function complete(id) {
    document.getElementById(id).classList.add("text-decoration-line-through");
    var sound = document.getElementById("sound");
    sound.play();
    setTimeout(function () {
      sound.pause();
      sound.currentTime = 0;
    }, 3000);
  }
  return (
    <>
      <div className="d-flex align-items-center flex-wrap mb-5">
        <p id={task.id} className=" p-2 mx-5 mb-0 border text-light">
          {task.text}
        </p>
        <button className="btn btn-success border"onClick={() => complete(task.id)}>
          complet
        </button>
        <br />
        <button className="ms-lg-5 ms-3 btn btn-danger border"onClick={() => deleteTask(task.id)}>
          delete
        </button>
      </div>
      <audio  id="sound" src="./مدحت شلبي - برافو عليك.mp3"></audio>
    </>
  ); 
}

export default TodoItem;
