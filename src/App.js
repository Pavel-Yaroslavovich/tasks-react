import './App.css';
import '../src/tasks/style.css'

import TaskOne from './tasks/task-1/taskOne';
import TaskTwo from './tasks/task-2/taskTwo';
import TaskThree from './tasks/task-3/taskThree';
import TaskFour from './tasks/task-4/taskFour';
import TaskFive from './tasks/task-5/taskFive';
import TaskSix from './tasks/task-6/taskSix';

function App() {
	return (
		<div className="App">
			<TaskOne />
			<TaskTwo />
			<TaskThree />
			<TaskFour />
			<TaskFive />
			<TaskSix />
		</div>
	);
}

export default App;
