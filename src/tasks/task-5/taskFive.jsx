import React from "react";
import Inp from "./inp";
import InpText from "./inpText"

function TaskFive() {
	const [name, setName] = React.useState()
	const handlChange = (name) => {
		setName(name)
	}
	return (
		<div className='task'>
			<h1 className='title'>Задача 5</h1>
			<p className='text'>Написать компонент, в котором есть два дочерних компонента,в первом
				компоненте должен отрисовываться инпут при изменении которого, во втором компоненте должно
				отрисовываться значение этого инпута "(подъем стейта react)"</p>
			<Inp onChange={handlChange} />
			<InpText text={name} />
		</div>
	)
}

export default TaskFive;