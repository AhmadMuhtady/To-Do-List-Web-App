import Task from './Task';

const TaskList = () => {
	return (
		<div className="mt-8">
			<h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-lg ">
				Your Tasks
			</h2>

			<div className="bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-800 space-y-4 rounded">
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	);
};

export default TaskList;
