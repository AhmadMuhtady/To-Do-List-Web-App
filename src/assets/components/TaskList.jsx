import { useState } from 'react';

import Task from './Task';
import Button from './Button';
import FilterTasks from './FilterTasks';
import TextInputs from './inputForm/TextInputs';
import SortTasks from './SortTasks';

const TaskList = ({
	tasks,
	setTasks,
	isTasksVisible,
	setIsTasksVisible,
	deleteTask,
	editTask,
	toggleComplete,
	getPriorityDisplay,
	getCategoryDisplay,
	taskForm,
	setIsFilterVisible,
	isFilterVisible,
	setFilters,
	filters,
	isSortVisible,
	setIsSortVisible,
	getFormattedDateTime,
	sort,
	setSort,
}) => {
	const [search, setSearch] = useState('');
	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	if (tasks.length === 0) {
		return (
			<p className="text-center text-white/90 text-sm mt-2 mb-3 leading-relaxed">
				No Tasks Yet
			</p>
		);
	}

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
				sorted.sort(
					(a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
				);
				break;
			default:
				break;
		}
		if (sortOrder === 'desc') sorted.reverse();

		return sorted;
	};

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
				<>
					{/* Control Buttons Row */}
					<div className="flex flex-wrap items-center gap-4 mt-6 mb-2">
						<Button
							className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
							onClick={() => {
								setIsFilterVisible(!isFilterVisible);
								setIsSortVisible(false);
							}}
						>
							{isFilterVisible ? 'Hide Filter' : 'Filters'}
						</Button>

						<Button
							className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
							onClick={() => {
								setIsSortVisible(!isSortVisible);
								setIsFilterVisible(false);
							}}
						>
							{isSortVisible ? 'Hide Sort' : 'Sort'}
						</Button>
					</div>

					{/* Panels Below Buttons */}
					{isFilterVisible && (
						<div className="transition-all duration-300">
							<FilterTasks
								setIsFilterVisible={setIsFilterVisible}
								isFilterVisible={isFilterVisible}
								setFilters={setFilters}
								filters={filters}
							/>
						</div>
					)}

					{isSortVisible && (
						<div className="transition-all duration-300">
							<SortTasks
								isSortVisible={isSortVisible}
								setIsSortVisible={setIsSortVisible}
								getFormattedDateTime={getFormattedDateTime}
								sort={sort}
								setSort={setSort}
							/>
						</div>
					)}

					{/* Search Input */}
					<TextInputs
						onChange={handleSearchChange}
						label="Search"
						name="search"
					/>

					{/* Task List */}
					<div className="mt-6 space-y-4">
						{handleSort(tasks, sort.sortBy, sort.sortOrder)
							.filter((task) => {
								const passesStatus =
									filters.status === 'All' ||
									(filters.status === 'Completed' && task.completed) ||
									(filters.status === 'Incomplete' && !task.completed);

								const passesCategory =
									filters.category === 'All' ||
									filters.category === task.category;

								const passesPriority =
									filters.priority === 'All' ||
									filters.priority === task.priority;

								const matchesSearch =
									task.title.toLowerCase().includes(search.toLowerCase()) ||
									task.description.toLowerCase().includes(search.toLowerCase());

								return (
									passesStatus &&
									passesCategory &&
									passesPriority &&
									matchesSearch
								);
							})
							.map((task) => (
								<Task
									key={task.id}
									task={task}
									deleteTask={deleteTask}
									editTask={editTask}
									toggleComplete={toggleComplete}
									getPriorityDisplay={getPriorityDisplay}
									getCategoryDisplay={getCategoryDisplay}
									getFormattedDateTime={getFormattedDateTime}
								/>
							))}
					</div>
				</>
			)}
		</div>
	);
};

export default TaskList;
