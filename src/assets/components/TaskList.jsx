import Task from './Task';
import Button from './Button';

const TaskList = ({ tasks, setTasks, isTasksVisible, setIsTasksVisible }) => {
	return (
		<div
			className="w-full bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-600/40 
text-white font-bold py-8 px-6 rounded-2xl mt-6 
backdrop-blur-lg shadow-[0_4px_25px_rgba(0,0,50,0.3)] 
border border-white/10"
		>
			<h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-lg ">
				Your Tasks
			</h2>

			<Button
				className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 mt-6"
				onClick={() => setIsTasksVisible(!isTasksVisible)}
			>
				{isTasksVisible ? '🕶️Hide Tasks' : '👀 View Tasks'}
			</Button>

			{isTasksVisible && (
				<div className="space-y-4 mt-3">
					{tasks.map((task) => (
						<Task />
					))}
				</div>
			)}
		</div>
	);
};

export default TaskList;
