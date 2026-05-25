import { SyntheticEvent, ChangeEvent } from 'react';

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 p-6 sm:flex-row sm:items-stretch">
      <input
        type="search"
        aria-label="Search companies"
        className="input-field flex-1"
        value={search}
        onChange={handleChange}
        placeholder="Company name or symbol"
      />
      <button type="button" onClick={onClick} className="btn-primary shrink-0">
        Search
      </button>
    </div>
  );
};

export default Search;
