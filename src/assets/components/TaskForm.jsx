import { useState, useRef } from 'react';

import TextInputs from './inputForm/TextInputs';
import SelectInput from './inputForm/SelectInput';
import AreaInputs from './inputForm/AreaInputs';
import Button from './Button';
import DateInputs from './inputForm/DateInputs';

const TaskForm = ({
	tasks,
	setTasks,
	isFormVisible,
	setIsFormVisible,
	taskForm,
	setTaskForm,
	isEditing,
	setIsEditing,
	editingTaskId,
	setEditingTaskId,
	topRef,
}) => {
	const taskIdRef = useRef(null);
	const handleFormChange = (e) => {
		setTaskForm({
			...taskForm,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isEditing) {
			// Update existing task
			setTasks((prev) =>
				prev.map((task) =>
					task.id === editingTaskId ? { ...taskForm, id: editingTaskId } : task
				)
			);
		} else {
			// Create new task
			const newTask = { ...taskForm, id: Date.now() };
			setTasks((prev) => [...prev, newTask]);
			console.log();
		}

		// Reset form
		setTaskForm({
			title: '',
			dueDate: '',
			priority: 'Medium',
			category: 'Work',
			description: '',
			completed: false,
		});
		setIsEditing(false);
		setEditingTaskId(null);
		setIsFormVisible(false);
	};

	return (
		<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
			<h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
				Task Master
			</h1>

			<Button
				className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 mt-6"
				onClick={() => setIsFormVisible(!isFormVisible)}
			>
				{isFormVisible ? '✖️Hide Form' : '➕ Add New Task'}
			</Button>

			{isFormVisible && (
				<form ref={topRef} onSubmit={handleSubmit} className="space-y-4">
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
						className=""
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

					<Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
						{isEditing ? 'Update Task' : 'Add Task'}
					</Button>
				</form>
			)}
		</div>
	);
};

export default TaskForm;
