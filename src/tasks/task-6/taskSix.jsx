import TimeSec from "./timeSec";

const TaskSix = () => {
	return (
		<div className='task'>
			<h1 className='title'>Задача 6</h1>
			<p className='text'>написать компонент, который отображает таймер секунд,
				пояснение: отображается сначала 0 черз секунду отображается 1 -> 2 -> 3 -> 4 и т.д.
				через useEffect()</p>
			<TimeSec />
		</div>
	)
}

export default TaskSix;
