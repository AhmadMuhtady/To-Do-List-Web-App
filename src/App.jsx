import { useState } from 'react';

import TaskForm from './assets/components/TaskForm';
import TaskList from './assets/components/TaskList';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isTasksVisible, setIsTasksVisible] = useState(false);

	const deleteTask = (id) => {
		const confirm = window.confirm(
			'Are you sure you want to DELETE this Task?'
		);
		if (confirm) {
			setTasks(tasks.filter((task) => task.id !== id));
		}
	};
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex justify-center py-12 px-8">
			<div className="w-full max-w-5xl">
				<TaskForm
					tasks={tasks}
					setTasks={setTasks}
					isFormVisible={isFormVisible}
					setIsFormVisible={setIsFormVisible}
				/>
				<TaskList
					tasks={tasks}
					setTasks={setTasks}
					isTasksVisible={isTasksVisible}
					setIsTasksVisible={setIsTasksVisible}
					deleteTask={deleteTask}
				/>
			</div>
		</div>
	);
};

export default App;
