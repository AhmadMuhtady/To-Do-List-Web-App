const AreaInputs = ({ name, label, onChange, required = false }) => {
	return (
		<div>
			<label
				className="block text-white text-m font-medium mb-1"
				htmlFor={name}
			>
				{label}
			</label>
			<textarea
				className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all"
				name={name}
				onChange={onChange}
				required={required}
			></textarea>
		</div>
	);
};

export default AreaInputs;
