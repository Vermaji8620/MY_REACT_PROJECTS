import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import Addtodo from "./Components/Addtodo";

function App() {
  let inittodo;

  !localStorage.getItem("todos")
    ? (inittodo = [])
    : (inittodo = JSON.parse(localStorage.getItem("todos")));

  const addtodo = (title, desc) => {
    console.log("I am adding a todo", title, desc);
    // let sno = todos[todos.length - 1].sno;
    const mytodo = {
      title: title,
      desc: desc,
      // sno: sno,
    };
    setTodos([...todos, mytodo]);
  };

  const ondelete = (todo) => {
    console.log("I am ondelete delte me if u can", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(inittodo); // setTodos ko hm jb v call krte hai to wo todos ko intantly change nai krta hai----to ho skta hai ki mera todos update v nai hua ho aur uskse pehle mera localstorage update ho giya ho.......to isiliye hm useEffect() hook ka use krte hai---

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header title="THIS IS TITLE" search={true} />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} ondelete={ondelete} />
      <Footer />
    </div>
  );
}

export default App;
