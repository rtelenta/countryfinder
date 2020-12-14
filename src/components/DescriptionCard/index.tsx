import Button from "components/Button";

type ListItem = {
  label: string;
  value: string;
};

interface IProps {
  title: string;
  supText: string;
  titleImg: string;
  descriptionList: ListItem[];
  className?: string;
  onClick?: () => void;
}

const DescriptionCard: React.FC<IProps> = ({
  title,
  supText,
  titleImg,
  descriptionList,
  className,
  onClick,
}) => {
  const isEven = (n: number) => n % 2 === 0;

  return (
    <div
      className={`bg-white shadow overflow-hidden sm:rounded-lg ${className}`}
      data-testid="DescriptionCard"
    >
      <div className="px-4 py-5 sm:px-6 flex items-center justify-start">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {title} <sup>{supText}</sup>
        </h3>
        <div className="flex-none mx-4">
          <img className="w-10" src={titleImg} alt={`bandera de ${title}`} />
        </div>
        <div className="ml-auto">
          <Button variant="outline" onClick={onClick}>
            Ver detalle
          </Button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          {descriptionList.map(({ label, value }, key) => (
            <div
              key={`descriptionListItem-${value}`}
              className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
                isEven(key) ? "bg-gray-50" : "bg-white"
              }`}
              data-testid="DescriptionCard__ListItem"
            >
              <dt className="text-sm font-medium text-gray-500">{label}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default DescriptionCard;
