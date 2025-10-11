import TaskForm from './assets/components/TaskForm';
import TaskList from './assets/components/TaskList';

const App = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex items-center justify-center p-8">
			<div className="w-full max-w-5xl">
				<TaskForm />
				<TaskList />
			</div>
		</div>
	);
};

export default App;
