interface IProps {
  countryName: string;
  className?: string;
}

const CountryMap: React.FC<IProps> = ({ countryName, className = "" }) => {
  const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;

  return (
    <iframe
      data-testid="CountryMap"
      className={`bg-gray-200 ${className}`}
      title={countryName}
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${countryName}`}
      allowFullScreen
    />
  );
};

export default CountryMap;
