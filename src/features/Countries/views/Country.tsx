import ListItem from "components/ListItem";
import { useParams } from "react-router-dom";
import CountryInfo from "../components/CountryInfo";
import useCountry from "../hooks/useCountry";
import {
  MapPin,
  MessageSquare,
  Flag,
  PhoneCall,
  DollarSign,
  Users,
} from "react-feather";
import LoadingCountry from "../components/LoadingCountry";
import EmptyCountry from "../components/EmptyCountry";
import CountryMap from "../components/CountryMap";

const Country: React.FC = () => {
  const { alphaCode } = useParams<{ alphaCode: string }>();
  const { loading, error, country } = useCountry(alphaCode);

  if (loading) return <LoadingCountry />;

  if (error || !country) return <EmptyCountry />;

  return (
    <div>
      <div className="py-12 bg-white my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex items-center">
          <CountryInfo
            preTitle={country.region}
            title={country.name}
            img={country.flag}
          />

          <div className="md:w-1/2 md:flex md:justify-center md:items-center md:border-l md:border-gray-400 mt-12 md:mt-0">
            <dl className="md:flex md:flex-col">
              <ListItem
                className="mb-8"
                icon={<MapPin />}
                label="Capital"
                value={country.capital}
              />

              <ListItem
                className="mb-8"
                icon={<MessageSquare />}
                label="Idioma(s)"
                value={country.languages}
              />

              <ListItem
                className="mb-8"
                icon={<DollarSign />}
                label="Moneda(s)"
                value={country.currencies}
              />

              <ListItem
                className="mb-8"
                icon={<Flag />}
                label="Nacionalidad"
                value={country.demonym}
              />

              <ListItem
                className="mb-8"
                icon={<Users />}
                label="Población"
                value={country.population}
              />

              <ListItem
                className="mb-8"
                icon={<PhoneCall />}
                label="Prefijo telefónico"
                value={country.callingCodes}
              />
            </dl>
          </div>
        </div>
      </div>

      <CountryMap className="w-full h-96" countryName={country.name} />
    </div>
  );
};

export default Country;
