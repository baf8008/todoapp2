import { nanoid } from "nanoid";
import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Title from "./Title";

const App = () => {
  const [todos, setTodos] = useState([
    { item1: "掃除をする", id: nanoid() },
    { item1: "洗濯をする", id: nanoid() },
    { item1: "料理をする", id: nanoid() },
  ]);

  // formに入力して、新しいタスクを追加する処理
  const addTodo = (text) => {
    setTodos([...todos, { item1: text, id: nanoid() }]);
  };

  // チェックボックスのチェック状態を変更する処理
       const change = (id) => {
      setTodos( 
        todos.map((todo) => { 
          if (todo.id === id) {
            return {...todo, isDone: !todo.isDone }
          } else { 
            return todo
          }
        })
      )
    }

  //削除する処理
  const deleteTodo = (id) => {
    // テスト関数(filter)：配列の要素（todo）のidと一致しないものがテストをパス
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <Title />
      <Form addTodo={addTodo} />
      <List 
        todos={todos} 
        deleteTodo={deleteTodo} 
        change={change}
        />
    </>
  );
};

export default App;
