interface IProps {
  autoComplete?: string;
  placeholder?: string;
  name?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
}

const TextField: React.FC<IProps> = ({
  autoComplete = "",
  placeholder = "",
  name = "",
  onInput,
  value,
}) => {
  return (
    <input
      type="text"
      name={name}
      onInput={onInput}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="p-2 px-3 leading-3 text-gray-900 focus:border-indigo-500 block w-full sm:text-md border-2 border-gray-300 rounded-md focus:outline-none"
      value={value}
    />
  );
};

export default TextField;
