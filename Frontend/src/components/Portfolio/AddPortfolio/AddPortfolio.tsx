import { SyntheticEvent } from 'react';

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ symbol, onPortfolioCreate }: Props) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-end space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={onPortfolioCreate}>
        <input readOnly hidden value={symbol} />
        <button type="submit" className="btn-secondary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
