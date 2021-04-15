import Item from "./Item";

const List = ({ todos, deleteTodo, change }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            id={todo.id}
            deleteTodo={deleteTodo}
            item1={todo.item1}
            change={change}
            isDone={todo.isDone}
          />
        );
      })}
    </ul>
  );
};

export default List;
