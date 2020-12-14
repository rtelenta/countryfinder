import Button from "components/Button";
import useCountries from "../hooks/useCountries";
import DescriptionCard from "components/DescriptionCard";
import Placeholder from "components/Placeholder";
import { filtersOptionsType } from "./Filters";
import EmptyImg from "assets/imgs/no-search-results-icon.svg";
import { useHistory } from "react-router-dom";
import useInfiniteScroll from "react-infinite-scroll-hook";

export type filterCountries = { search: string } & filtersOptionsType;

interface IProps {
  filters: filterCountries;
}

const CountriesList: React.FC<IProps> = ({ filters }) => {
  const {
    loading,
    error,
    countries,
    refetch,
    totalResults,
    isEmpty,
    loadNextPage,
    loadingMore,
    hasNextPage,
    showingResults,
  } = useCountries(filters);

  const history = useHistory();

  const infiniteRef = useInfiniteScroll({
    loading: loadingMore,
    hasNextPage,
    onLoadMore: loadNextPage,
  });

  const goToDetail = (slug: string) => () => {
    history.push(`/${slug}`);
  };

  if (error) {
    return (
      <div className="flex-auto md:pl-4">
        <p className="mb-4 text-gray-900">
          Ha ocurrido un error al cargar los países por favor intente nuevamente
        </p>

        <Button onClick={() => refetch()}>Reintentar</Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-auto md:pl-4">
        <Placeholder className="h-72 mb-8" />
        <Placeholder className="h-72 mb-8" />
        <Placeholder className="h-72 mb-8" />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex-auto md:pl-4">
        <p className="mb-16 text-gray-900 text-center my-8 text-lg">
          No se encontraron resultados :(
        </p>

        <img
          src={EmptyImg}
          alt="No se encontraron resultados"
          className="max-w-sm w-full mx-auto"
        />
      </div>
    );
  }

  const haveMultipleResults = totalResults > 1;
  return (
    <div className="flex-auto md:pl-4 relative">
      <div className="my-4 text-sm text-gray-900 md:absolute left-0 top-0 ml-6 md:-mt-8">
        Mostrando {showingResults} de{" "}
        <strong>
          {totalResults} resultado{haveMultipleResults ? "s" : ""}
        </strong>
      </div>

      <div ref={infiniteRef as any}>
        {countries?.map(
          ({
            name,
            flag,
            alpha2Code,
            capital,
            languages,
            currencies,
            region,
            id,
          }) => (
            <DescriptionCard
              className="mb-8"
              key={`DescriptionCard-${id}`}
              title={name}
              titleImg={flag}
              supText={alpha2Code}
              onClick={goToDetail(alpha2Code)}
              descriptionList={[
                { label: "Capital", value: capital },
                {
                  label: "Idioma(s)",
                  value: languages,
                },
                {
                  label: "Moneda(s)",
                  value: currencies,
                },
                { label: "Región", value: region },
              ]}
            />
          )
        )}

        {loadingMore && (
          <>
            <Placeholder className="h-72 mb-8" />
            <Placeholder className="h-72 mb-8" />
            <Placeholder className="h-72 mb-8" />
          </>
        )}
      </div>
    </div>
  );
};

export default CountriesList;
