interface IProps {
  className?: string;
}

const Placeholder: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 ${className}`}
      data-testid="Placeholder"
    />
  );
};

export default Placeholder;
