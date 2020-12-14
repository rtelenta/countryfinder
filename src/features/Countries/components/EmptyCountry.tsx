import EmptyImg from "assets/imgs/no-search-results-icon.svg";
import { Link } from "react-router-dom";
import { routes } from "routes/routing";

const EmptyCountry: React.FC = () => {
  return (
    <div className="py-12 bg-white mt-16" data-testid="EmptyCountry">
      <div className="max-w-7xl mx-auto md:flex items-center">
        <div className="md:w-1/2 sm:mx-6 lg:mx-8 mb-8 flex justify-center">
          <p className="mb-16 text-gray-900 text-center my-8 text-lg max-w-xs">
            No tenemos información disponible del país solicitado.{" "}
            <Link
              to={routes.home}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Buscar otro país
            </Link>
          </p>
        </div>

        <div className="md:w-1/2 sm:mx-6 lg:mx-8 mb-8">
          <img
            src={EmptyImg}
            alt="No tenemos información disponible del país solicitado"
            className="max-w-sm w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyCountry;
