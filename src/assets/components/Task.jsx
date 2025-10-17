import Button from './Button';

const Task = ({
	task,
	deleteTask,
	editTask,
	toggleComplete,
	getPriorityDisplay,
	getCategoryDisplay,
	getFormattedDateTime,
}) => {
	return (
		<div
			className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 ${
				task.completed
					? 'bg-gray-700/40 border border-green-400/20 opacity-70 ring-2 ring-green-400/30'
					: 'bg-gray-800/60 border border-cyan-400/20 hover:shadow-xl'
			}`}
		>
			<div className="flex justify-between items-center mb-2">
				<div className="flex items-center gap-3">
					<span
						className={`text-xl font-semibold ${
							task.completed ? 'text-green-300 line-through' : 'text-white'
						}`}
					>
						{task.title}
					</span>
				</div>
				<span className="text-sm px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
					{task.createdAt}
				</span>

				<span className="text-sm px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
					{getPriorityDisplay(task.priority)}
				</span>
				{task.completed && (
					<span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ml-2">
						✔️ Completed
					</span>
				)}
			</div>

			<p
				className={`text-sm mb-3 ${
					task.completed
						? 'text-white/50 italic line-through '
						: 'text-white/80'
				}`}
			>
				{task.description}
			</p>

			<div className="text-xs text-white/60 mb-4 flex gap-2">
				<span>📅 {task.dueDate}</span>
				<span>|</span>
				<span>{getCategoryDisplay(task.category)}</span>
			</div>

			<div className="flex gap-2 justify-end">
				<Button
					onClick={() => editTask(task.id)}
					className="bg-blue-500/20 hover:bg-blue-500/30 text-white px-3 py-1 rounded-md text-sm"
				>
					✏️ Edit
				</Button>
				<Button
					onClick={() => deleteTask(task.id)}
					className="bg-red-500/20 hover:bg-red-500/30 text-white px-3 py-1 rounded-md text-sm"
				>
					🗑️ Delete
				</Button>
				<Button
					onClick={() => toggleComplete(task.id)}
					className="bg-green-500/20 hover:bg-green-500/30 text-white px-3 py-1 rounded-md text-sm"
				>
					{task.completed === true ? '↩️ Undo' : '✅ Done'}
				</Button>
			</div>
		</div>
	);
};

export default Task;
