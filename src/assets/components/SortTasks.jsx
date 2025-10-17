import Button from './Button';

const SortTasks = ({ isSortVisible, setIsSortVisible }) => {
	const handleSort = (tasks, sortBy, sortOrder) => {
		const sorted = [...tasks];

		switch (sortBy) {
			case 'date':
				sorted.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
				break;
			case 'priority':
				const priorityMap = { High: 3, Medium: 2, Low: 1 };
				sorted.sort(
					(a, b) => priorityMap[b.priority] - priorityMap[a.priority]
				);
				break;
			case 'title':
				sorted.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case 'completed':
				sorted.sort((a, b) => Number(a.completed) - Number(b.completed));
				break;
			case 'created':
				sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
				break;
			default:
				break;
		}
		if (sortOrder === 'desc') sorted.reverse();

		return sorted;
	};
	return (
		<div className="mt-3 w-full">
			<div
				className={`transition-transform duration-500 ease-in-out origin-top overflow-hidden ${
					isSortVisible
						? 'mt-4 scale-y-100 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 space-y-6'
						: 'scale-y-0 h-0'
				}`}
			>
				<div className="flex flex-wrap gap-3 justify-center">
					<Button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-all duration-300">
						📅 Soonest
					</Button>
					<Button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-all duration-300">
						🔴 High First
					</Button>
					<Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-all duration-300">
						🆕 Newest
					</Button>
					<Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-all duration-300">
						✅ Done Last
					</Button>
					<Button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-all duration-300">
						🔤 Alphabetical
					</Button>
				</div>

				<Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
					🧹 Clear Sort
				</Button>
			</div>
		</div>
	);
};

export default SortTasks;
