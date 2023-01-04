import { useEffect, useState } from "react";
import axios from "axios";


const URL = 'http://localhost:8080/api/todo';
function App() {
  const [todoList,setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(URL);
    setTodoList(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    axios.post(URL, {text,done});
    fetchData();
  }
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name = 'text'/>
        <input name = 'done' type='checkbox' />
        <input type = 'submit' value='추가' />
      </form>
      {todoList?.map((todo) => (
        <div key={todo.id} style={{display:'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;