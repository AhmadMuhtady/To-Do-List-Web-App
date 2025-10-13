const SelectInput = ({ value, label, name, onChange, options }) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className="block text-white text-m font-medium mb-1"
			>
				{label}
			</label>
			<select
				name={name}
				value={value}
				className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all text-white [&>option]:bg-gray-800 [&>option]:text-white"
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectInput;
