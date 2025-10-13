import Button from './Button';

const Task = ({ task }) => {
	return (
		<div
			className="bg-[#3a3f73]/70 border border-blue-400/20 rounded-2xl p-6 
	shadow-[0_4px_20px_rgba(0,0,50,0.25)] hover:shadow-[0_8px_30px_rgba(80,120,255,0.35)] 
	hover:bg-[#4b52a0]/80 transition-all duration-300 
	backdrop-blur-md hover:-translate-y-1 group"
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<span className="text-lg font-semibold text-white">{task.title}</span>
				</div>
				<span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium">
					{task.priority}
				</span>
			</div>

			<p className="text-white/90 text-sm mt-2 mb-3 leading-relaxed">
				{task.description}
			</p>

			<div className="flex items-center gap-4 text-sm text-white/90 mb-3">
				<span>📅 {task.dueDate}</span>
				<span>|</span>
				<span>{task.category}</span>
			</div>

			<div className="flex justify-end gap-2 ">
				<Button className="bg-blue-500/20 hover:bg-blue-500/30 text-white/90 px-3 py-1.5 rounded-lg text-sm transition-all hover:scale-105">
					✏️ Edit
				</Button>
				<Button className="bg-red-500/20 hover:bg-red-500/30 text-white/90 px-3 py-1.5 rounded-lg text-sm transition-all hover:scale-105">
					🗑️ Delete
				</Button>
				<Button className="bg-green-500/20 hover:bg-green-500/30 text-white/90 px-3 py-1.5 rounded-lg text-sm transition-all hover:scale-105">
					✅ Done
				</Button>
			</div>
		</div>
	);
};

export default Task;
