import SelectInput from './inputForm/SelectInput';
import Button from './Button';
import { useState } from 'react';

const FilterTasks = ({ taskForm, isFilterVisible, setIsFilterVisible }) => {
	const [filters, setFilters] = useState({
		status: 'All',
		priority: 'All',
		category: 'All',
	});

	const handleFilterChange = () => {};

	return (
		<div className="mt-3">
			<Button
				className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
				onClick={() => setIsFilterVisible(!isFilterVisible)}
			>
				{isFilterVisible ? 'Hide Filter' : 'Filters'}
			</Button>

			<div
				className={`transition-transform duration-500 ease-in-out origin-top overflow-hidden ${
					isFilterVisible
						? 'mt-4 scale-y-100 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md space-y-4'
						: 'scale-y-0 h-0'
				}`}
			>
				<div className="flex gap-2">
					<Button onClick={() => handleFilterChange('status', 'All')}>
						✅ All
					</Button>
					<Button onClick={() => handleFilterChange('status', 'Completed')}>
						✅ Completed
					</Button>
					<Button onClick={() => handleFilterChange('status', 'Incomplete')}>
						🕒 Incomplete
					</Button>
				</div>

				<SelectInput
					value={taskForm.priority}
					label="Priority"
					name="priority"
					onChange={(e) => handleFilterChange('priority', e.target.value)}
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
					onChange={(e) => handleFilterChange('category', e.target.value)}
					options={[
						{ value: 'Work', label: '📁 Work' },
						{ value: 'Personal', label: '🏠 Personal' },
						{ value: 'Shopping', label: '🛒 Shopping' },
						{ value: 'Health', label: '🧑🏻‍⚕️ Health' },
						{ value: 'Ideas', label: '💡 Ideas' },
						{ value: 'Others', label: '💭 Others' },
					]}
				/>

				<Button
					className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
					onClick={() => handleFilterChange('clear')}
				>
					🧹 Clear Filters
				</Button>
			</div>
		</div>
	);
};

export default FilterTasks;
