import Button from "components/Button";
import TextField from "components/TextField";
import { useState } from "react";

interface IProps {
  onSubmit?: (search: string) => void;
}

const SearchForm: React.FC<IProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) onSubmit(search);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  return (
    <div className="px-4 md:px-8 md:text-center my-4 md:mt-24 md:mb-20">
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Información del país que desees
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-2xl md:mx-auto flex items-center"
      >
        <div className="flex-auto mr-4">
          <TextField
            value={search}
            name="search"
            placeholder="Buscar un país..."
            autoComplete="searchCountry"
            onInput={handleChange}
          />
        </div>

        <Button type="submit">BUSCAR</Button>
      </form>
    </div>
  );
};

export default SearchForm;
