import Button from './Button';

const SortTasks = ({ isSortVisible, setIsSortVisible, sort, setSort }) => {
	const handleSortClick = (sortByKey) => {
		setSort((prev) => ({
			sortBy: sortByKey,
			sortOrder:
				prev.sortBy === sortByKey && prev.sortOrder === 'asc' ? 'desc' : 'asc',
		}));
	};

	const getLabel = (key) => {
		const active = sort.sortBy === key;
		const order = sort.sortOrder;

		switch (key) {
			case 'date':
				return active
					? order === 'asc'
						? '📅 Soonest First'
						: '📅 Latest First'
					: '📅 Due Date';
			case 'priority':
				return active
					? order === 'asc'
						? '🟢 Low → High'
						: '🔴 High → Low'
					: '🔴 Priority';
			case 'created':
				return active
					? order === 'asc'
						? '🆕 Oldest First'
						: '🆕 Newest First'
					: '🆕 Created';
			case 'completed':
				return active
					? order === 'asc'
						? '✖️ Incomplete First'
						: '✅ Done First'
					: '✅ Completion';
			case 'title':
				return active
					? order === 'asc'
						? '🔤 A → Z'
						: '🔤 Z → A'
					: '🔤 Alphabetical';
			default:
				return 'Sort';
		}
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
					{['date', 'priority', 'created', 'completed', 'title'].map((key) => (
						<Button
							key={key}
							onClick={() => handleSortClick(key)}
							className={`px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-all duration-300 text-white ${
								key === 'date'
									? 'bg-gradient-to-r from-blue-500 to-indigo-600'
									: key === 'priority'
									? 'bg-gradient-to-r from-red-500 to-pink-500'
									: key === 'created'
									? 'bg-gradient-to-r from-green-500 to-teal-500'
									: key === 'completed'
									? 'bg-gradient-to-r from-yellow-500 to-orange-500'
									: 'bg-gradient-to-r from-purple-500 to-violet-600'
							} ${sort.sortBy === key ? 'ring-2 ring-white/80 scale-105' : ''}`}
						>
							{getLabel(key)}
						</Button>
					))}
				</div>

				<Button
					onClick={() => setSort({ sortBy: '', sortOrder: 'asc' })}
					className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
				>
					🧹 Clear Sort
				</Button>
			</div>
		</div>
	);
};

export default SortTasks;
