import { useState, useRef } from 'react';

import TaskForm from './assets/components/TaskForm';
import TaskList from './assets/components/TaskList';

const App = () => {
	const topRef = useRef(null);
	const [taskForm, setTaskForm] = useState({
		title: '',
		dueDate: '',
		priority: 'Medium',
		category: 'Work',
		description: '',
	});
	const [tasks, setTasks] = useState([]);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isTasksVisible, setIsTasksVisible] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editingTaskId, setEditingTaskId] = useState(null); // optional: track which task is being edited

	const deleteTask = (id) => {
		const confirm = window.confirm(
			'Are you sure you want to DELETE this Task?'
		);
		if (confirm) {
			setTasks(tasks.filter((task) => task.id !== id));
		}
	};

	const editTask = (id) => {
		const taskToEdit = tasks.find((task) => task.id === id);
		if (taskToEdit) {
			setTaskForm({ ...taskToEdit });
			setIsEditing(true);
			setEditingTaskId(id);
			setIsFormVisible(true);
			topRef.current?.scrollIntoView({ behavior: 'smooth' });
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
					setTaskForm={setTaskForm}
					taskForm={taskForm}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
					editingTaskId={editingTaskId}
					topRef={topRef}
				/>
				<TaskList
					tasks={tasks}
					setTasks={setTasks}
					isTasksVisible={isTasksVisible}
					setIsTasksVisible={setIsTasksVisible}
					deleteTask={deleteTask}
					editTask={editTask}
				/>
			</div>
		</div>
	);
};

export default App;
