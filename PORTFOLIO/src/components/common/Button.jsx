const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300">
      {children}
    </button>
  );
};

export default Button;