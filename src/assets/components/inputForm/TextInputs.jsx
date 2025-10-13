const TextInputs = ({ onChange, label, name, value, required = false }) => {
	return (
		<div className="mb-4">
			<label
				className="block text-white text-m font-medium mb-1"
				htmlFor={name}
			>
				{label}
			</label>
			<input
				onChange={onChange}
				name={name}
				value={value}
				required={required}
				className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all"
			/>
		</div>
	);
};

export default TextInputs;
