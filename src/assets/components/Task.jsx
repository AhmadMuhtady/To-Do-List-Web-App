import Button from './Button';

const Task = () => {
	return (
		<div
			className="bg-white/10
backdrop-blur-lg rounded-xl p-5 border border-white/20 shadow-lg hover:shadow-2xl hover:border-white/30 transition-all "
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<span className="text-lg font-semibold text-white">
						Build an awesome todo app
					</span>
				</div>
				<span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium">
					🔴 High
				</span>
			</div>

			<p className="text-white/90 text-sm mt-2 mb-3 leading-relaxed">
				Learn React and Tailwind while creating something beautiful
			</p>

			<div className="flex items-center gap-4 text-sm text-white/90 mb-3">
				<span>📅 Oct 15, 2025</span>
				<span>|</span>
				<span>📁 Work</span>
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
