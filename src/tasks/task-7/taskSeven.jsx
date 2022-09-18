import Time from "./time";

const TaskSeven = () => {
	return (
		<div className='task'>
			<h1 className='title'>Задача 6.1</h1>
			<p className='text'>написать компонент, который отображает таймер секунд,
				пояснение: отображается сначала 0 черз секунду отображается 1 -> 2 -> 3 -> 4 и т.д.
				через useEffect(). Таймер должен запускаться при нажатии на кнопку!!!</p>
			<Time />
		</div>
	)
}

export default TaskSeven;