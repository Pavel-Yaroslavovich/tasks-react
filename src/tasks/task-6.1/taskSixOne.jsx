import Time from "./time";

const TaskSixOne = () => {
	return (
		<div className='task'>
			<h1 className='title'>Задача 6.1</h1>
			<p className='text'>написать компонент, который отображает таймер секунд,
				пояснение: отображается сначала 0 черз секунду отображается 1 -> 2 -> 3 -> 4 и т.д.
				через useEffect(). Таймер должен запускаться и останавливаться при нажатии на кнопки!!!</p>
			<Time />
		</div>
	)
}

export default TaskSixOne;