import Button from './Button';

const SortTasks = ({ isSortVisible, setIsSortVisible }) => {
	return (
		<div className="mt-3">
			<Button
				className="ml-3 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
				onClick={() => setIsSortVisible(!isSortVisible)}
			>
				{isSortVisible ? 'Hide Sort' : 'Sort'}
			</Button>
		</div>
	);
};

export default SortTasks;
