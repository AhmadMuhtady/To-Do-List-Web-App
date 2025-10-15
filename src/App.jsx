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
		completed: false,
	});
	const [tasks, setTasks] = useState([]);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isTasksVisible, setIsTasksVisible] = useState(false);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
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

	const toggleComplete = (id) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const getPriorityDisplay = (priority) => {
		const map = {
			Low: '🟢 Low',
			Medium: '🟠 Medium',
			High: '🔴 High',
		};
		return map[priority] || priority;
	};

	const getCategoryDisplay = (category) => {
		const map = {
			Work: '📁 Work',
			Personal: '🏠 Personal',
			Shopping: '🛒 Shopping',
			Health: '🧑🏻‍⚕️ Health',
			Ideas: '💡 Ideas',
			Others: '💭 Others',
		};
		return map[category] || category;
	};
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 py-12 flex justify-center items-start">
			<div className="w-full max-w-xl space-y-8">
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
					setEditingTaskId={setEditingTaskId}
				/>
				<TaskList
					tasks={tasks}
					setTasks={setTasks}
					isTasksVisible={isTasksVisible}
					setIsTasksVisible={setIsTasksVisible}
					deleteTask={deleteTask}
					editTask={editTask}
					toggleComplete={toggleComplete}
					getPriorityDisplay={getPriorityDisplay}
					getCategoryDisplay={getCategoryDisplay}
					taskForm={taskForm}
					isFilterVisible={isFilterVisible}
					setIsFilterVisible={setIsFilterVisible}
				/>
			</div>
		</div>
	);
};

export default App;
