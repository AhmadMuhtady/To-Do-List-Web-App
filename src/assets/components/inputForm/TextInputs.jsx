const TextInputs = ({ onChange, label, name, value, required = false }) => {
	return (
		<div className="mb-4">
			<label className="block font-semibold" htmlFor={name}>
				{label}
			</label>
			<input
				onChange={onChange}
				name={name}
				value={value}
				required={required}
				className="w-full p-2 border rounded-lg"
			/>
		</div>
	);
};

export default TextInputs;
