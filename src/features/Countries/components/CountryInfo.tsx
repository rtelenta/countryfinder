interface IProps {
  preTitle: string;
  title: string;
  img: string;
}

const CountryInfo: React.FC<IProps> = ({ preTitle, title, img }) => {
  return (
    <div className="lg:text-center md:w-1/2" data-testid="CountryInfo">
      <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        {preTitle}
      </p>
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 max-w-2xl lg:mx-auto">
        <img
          className="max-w-xs w-full lg:mx-auto shadow"
          src={img}
          alt={`${title}`}
        />
      </div>
    </div>
  );
};

export default CountryInfo;
