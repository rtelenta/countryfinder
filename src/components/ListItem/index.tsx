interface IProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

const ListItem: React.FC<IProps> = ({ icon, label, value, className = "" }) => {
  return (
    <div className={`flex mb-8 ${className}`}>
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">{label}</dt>
        <dd className="mt-2 text-base text-gray-500">{value}</dd>
      </div>
    </div>
  );
};

export default ListItem;
