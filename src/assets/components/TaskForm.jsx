import { useState } from 'react';
import TextInputs from './inputForm/TextInputs';
import SelectInput from './inputForm/SelectedInputs';
import AreaInputs from './inputForm/AreaInputs';
import Button from './Button';

const TaskForm = () => {
	const [taskForm, setTaskForm] = useState({
		title: '',
		priority: 'Medium',
		category: 'Work',
		description: '',
	});

	const handleFormChange = (e) => {
		setTaskForm({
			...TaskForm,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div>
			<h1 className="text-3xl font-bold text-white text-center mb-12">
				Task Master
			</h1>

			<form className="mb-6">
				<TextInputs
					name="title"
					label="Task Title"
					value={taskForm.title}
					onChange={handleFormChange}
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
					label="Description"
					name="description"
					onChange={handleFormChange}
					required
				/>

				<Button>Add Task</Button>
			</form>
		</div>
	);
};

export default TaskForm;
