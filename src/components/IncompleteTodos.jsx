export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
     <div className="incomplete-area">
        <p className='title'>未完了のTODO</p>
        <ul>
          {todos.map((todos, index) =>  (
                <li key={todos}>
                  <div className="list-row">
                    <p className="todo-item">{todos}</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </li>
              ))}
        </ul>
      </div>
  )
}