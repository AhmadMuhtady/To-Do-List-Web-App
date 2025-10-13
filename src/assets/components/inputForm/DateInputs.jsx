const DateInputs = ({ name, label, value, onChange, required = false }) => {
	return (
		<div>
			<label
				htmlFor={name}
				className="block text-white text-sm font-medium mb-2"
			>
				{label}
			</label>
			<input
				name={name}
				type="date"
				onChange={onChange}
				value={value}
				required={required}
				className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
			/>
		</div>
	);
};

export default DateInputs;
