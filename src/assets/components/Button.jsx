const Button = ({ children, onClick, classList }) => {
	return (
		<button onClick={onClick} className={classList}>
			{children}
		</button>
	);
};

export default Button;
