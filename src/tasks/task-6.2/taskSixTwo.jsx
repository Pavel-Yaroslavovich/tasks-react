import Time from "./time";

const TaskSixTwo = () => {
	return (
		<div className='task'>
			<h1 className='title'>Задача 6.2</h1>
			<p className='text'>написать компонент, который при введении числа в инпут начнет отчет по
				убыванию числа, через useEffect. Таймер должен запускаться и останавливаться при нажатии на
				кнопки. При запуске таймера, в инпут до нажатия на кнопку стоп больше нельзя нечего ввести.</p>
			<Time />
		</div>
	)
}

export default TaskSixTwo;