import Placeholder from "components/Placeholder";

const LoadingCountry: React.FC = () => {
  return (
    <div className="py-12 bg-white mt-16" data-testid="LoadingCountry">
      <div className="max-w-7xl mx-auto md:flex items-center">
        <Placeholder className="md:w-1/2 h-96 mx-4 sm:mx-6 lg:mx-8 mb-8" />
        <Placeholder className="md:w-1/2 h-96 mx-4 sm:mx-6 lg:mx-8 mb-8" />
      </div>
    </div>
  );
};

export default LoadingCountry;
