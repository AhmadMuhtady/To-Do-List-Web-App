import Task from './Task';
import Button from './Button';

const TaskList = ({
	tasks,
	setTasks,
	isTasksVisible,
	setIsTasksVisible,
	deleteTask,
	editTask,
	toggleComplete,
}) => {
	if (tasks.length === 0) {
		return (
			<p className="text-center text-white/90 text-sm mt-2 mb-3 leading-relaxed">
				No Tasks Yet
			</p>
		);
	}
	return (
		<div className="bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10">
			<h2 className="text-3xl font-bold text-center text-magenta-400 mb-6">
				📋 Your Tasks
			</h2>

			<Button
				className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 mt-6"
				onClick={() => setIsTasksVisible(!isTasksVisible)}
			>
				{isTasksVisible ? '🕶️ Hide Tasks' : '👀 View Tasks'}
			</Button>

			{isTasksVisible && (
				<div className="mt-6 space-y-4">
					{tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							deleteTask={deleteTask}
							editTask={editTask}
							toggleComplete={toggleComplete}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default TaskList;
