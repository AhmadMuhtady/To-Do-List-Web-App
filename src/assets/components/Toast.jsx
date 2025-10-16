// Toast.jsx
const Toast = ({ message, visible }) => {
	return (
		<div
			className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
				visible
					? 'opacity-100 scale-100'
					: 'opacity-0 scale-95 pointer-events-none'
			} bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold`}
		>
			{message}
		</div>
	);
};

export default Toast;
