import Select, { ValueType } from "react-select";
import Placeholder from "components/Placeholder";
import useFilters from "../hooks/useFilters";
import Button from "components/Button";
import Sidebar from "./Sidebar";
import { useState } from "react";

export type filtersOptionsType = {
  language: string | null;
  currency: string | null;
  region: string | null;
};

interface IProps {
  onChange?: (filters: filtersOptionsType) => void;
}

const Filters: React.FC<IProps> = ({ onChange }) => {
  const title = "Filtrar";

  const {
    currencyOptions,
    languageOptions,
    regionOptions,
    loading,
    error,
    refetch,
  } = useFilters();

  const [filters, setFilters] = useState<filtersOptionsType>({
    language: null,
    currency: null,
    region: null,
  });

  const handleChange = (filter: "language" | "currency" | "region") => (
    option: ValueType<
      {
        value: string;
        label: string;
      },
      false
    >
  ) => {
    const newFilters = {
      ...filters,
      [filter]: option?.value || null,
    };

    setFilters(newFilters);

    if (onChange) onChange(newFilters);
  };

  if (error) {
    return (
      <Sidebar title={title}>
        <p className="mb-4">
          Ha ocurrido un error al cargar los filtros por favor intente
          nuevamente
        </p>

        <Button onClick={() => refetch()}>Reintentar</Button>
      </Sidebar>
    );
  }

  if (loading) {
    return (
      <Sidebar title={title}>
        <Placeholder className="mb-4 h-8" />
        <Placeholder className="mb-4 h-8" />
        <Placeholder className="mb-4 h-8" />
      </Sidebar>
    );
  }

  return (
    <Sidebar title={title}>
      <Select
        className="mb-4"
        options={languageOptions}
        placeholder="Por idioma"
        onChange={handleChange("language")}
        isClearable
      />
      <Select
        className="mb-4"
        options={currencyOptions}
        placeholder="Por moneda"
        onChange={handleChange("currency")}
        isClearable
      />
      <Select
        className="mb-4"
        options={regionOptions}
        placeholder="Por región"
        onChange={handleChange("region")}
        isClearable
      />
    </Sidebar>
  );
};

export default Filters;
