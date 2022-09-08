import Inp from "./inp";

function TaskFive() {
	return (
		<div className='task'>
			<h1 className='title'>Задача 5</h1>
			<p className='text'>Написать компонент, в котором есть два дочерних компонента,в первом
				компоненте должен отрисовываться инпут при изменении которого, во втором компоненте должно
				отрисовываться значение этого инпута "(подъем стейта react)"</p>
			<Inp />
		</div>
	)
}

export default TaskFive;