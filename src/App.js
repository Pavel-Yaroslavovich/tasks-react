import './App.css';
import '../src/tasks/style.css'

import TaskOne from './tasks/task-1/taskOne';
import TaskTwo from './tasks/task-2/taskTwo';
import TaskThree from './tasks/task-3/taskThree';
import TaskFour from './tasks/task-4/taskFour';
import TaskFive from './tasks/task-5/taskFive';

function App() {
	return (
		<div className="App">
			<TaskOne />
			<TaskTwo />
			<TaskThree />
			<TaskFour />
			<TaskFive />
		</div>
	);
}

export default App;
