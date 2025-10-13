import { useState } from 'react';
import TextInputs from './inputForm/TextInputs';
import SelectInput from './inputForm/SelectedInputs';
import AreaInputs from './inputForm/AreaInputs';
import Button from './Button';
import DateInputs from './inputForm/DateInputs';

const TaskForm = ({ tasks, setTasks, isFormVisible, setIsFormVisible }) => {
	const [taskForm, setTaskForm] = useState({
		title: '',
		dueDate: '',
		priority: 'Medium',
		category: 'Work',
		description: '',
	});

	const handleFormChange = (e) => {
		setTaskForm({
			...taskForm,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!taskForm.title || !taskForm.dueDate || !taskForm.description) {
			alert('Please fill All Fields');
		}

		const newTask = { id: crypto.randomUUID(), ...taskForm };

		setTasks([newTask, ...tasks]);

		setTaskForm({
			title: '',
			dueDate: '',
			priority: 'Medium',
			category: 'Work',
			description: '',
		});
	};
	return (
		<div className="bg-white/10  backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
			<h1 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-lg">
				Task Master
			</h1>

			<Button
				className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 mt-6"
				onClick={() => setIsFormVisible(!isFormVisible)}
			>
				{isFormVisible ? '✖️Hide Form' : '➕ Add New Task'}
			</Button>

			{isFormVisible && (
				<form onSubmit={handleSubmit} className="space-y-3">
					<TextInputs
						name="title"
						label="Task Title"
						value={taskForm.title}
						onChange={handleFormChange}
						required
					/>

					<DateInputs
						label="Due Date"
						name="dueDate"
						onChange={handleFormChange}
						value={taskForm.dueDate}
						required
					/>

					<SelectInput
						value={taskForm.priority}
						label="Priority"
						name="priority"
						onChange={handleFormChange}
						options={[
							{ value: 'Low', label: '🟢 Low' },
							{ value: 'Medium', label: '🟠 Medium' },
							{ value: 'High', label: '🔴 High' },
						]}
					/>

					<SelectInput
						value={taskForm.category}
						label="Category"
						name="category"
						onChange={handleFormChange}
						options={[
							{ value: 'Work', label: '📁 Work' },
							{ value: 'Personal', label: '🏠 Personal' },
							{ value: 'Shopping', label: '🛒 Shopping' },
							{ value: 'Health', label: '🧑🏻‍⚕️ Health' },
							{ value: 'Ideas', label: '💡 Ideas' },
							{ value: 'Others', label: '💭 Others' },
						]}
					/>

					<AreaInputs
						value={taskForm.description}
						label="Description"
						name="description"
						onChange={handleFormChange}
						required
					/>

					<Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 mt-6">
						Add Task
					</Button>
				</form>
			)}
		</div>
	);
};

export default TaskForm;
