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
    if(text === ""){
      alert("내용을 입력해주세요.");
      return;
    }
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
          <div>{todo.id}. &nbsp;</div>
          <div>{todo.text} &nbsp; :  &nbsp;</div>
          <div>{todo.done ? '해결됨' : '해결되지 않음'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;