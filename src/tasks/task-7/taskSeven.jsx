import Table from "./table";

const TaskSeven = () => {
  return (
    <div className='task'>
      <h1 className='title'>Задача 7</h1>
      <p className='text'>написать компонент, который делает запрос и отрисовывает ответ в таблицу, использовать функцию хелпер getData()
        которая возвращает json с данными. Запрос должен отпровляться при нажатии на кнопку, таблица должна отрисовываться при нажатии на кнопку</p>
      <Table />
    </div>
  )
}

export default TaskSeven;
