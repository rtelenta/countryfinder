interface IProps {
  variant?: "solid" | "outline";
  onClick?: () => void;
  type?: "button" | "submit";
}

export const buttonStyles: {
  solid: string;
  outline: string;
} = {
  solid: "border-transparent bg-indigo-600 hover:bg-indigo-700 text-white",
  outline: "border-indigo-600 bg-white hover:bg-indigo-50 text-indigo-600",
};

const Button: React.FC<IProps> = ({
  children,
  variant = "solid",
  onClick,
  type = "button",
}) => {
  const buttonVariant = buttonStyles[variant] || buttonStyles.solid;

  return (
    <button
      className={`flex-none inline-flex focus:outline-none items-center justify-center px-3 py-2 border text-sm font-medium rounded-md ${buttonVariant}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
