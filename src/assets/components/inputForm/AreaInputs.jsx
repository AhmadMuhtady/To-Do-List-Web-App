const AreaInputs = ({ name, label, onChange, required = false }) => {
	return (
		<div>
			<label className="block font-semibold" htmlFor={name}>
				{label}
			</label>
			<textarea
				className="w-full p-2 border rounded-lg"
				name={name}
				onChange={onChange}
				required={required}
			></textarea>
		</div>
	);
};

export default AreaInputs;
