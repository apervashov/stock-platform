import { Link } from 'react-router-dom';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { SyntheticEvent } from 'react';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="card-surface" key={id} id={id}>
      <Link
        to={`/company/${searchResult.symbol}`}
        className="text-center font-bold text-contentPrimary hover:text-darkBlue md:text-left"
      >
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="text-contentSecondary">{searchResult.currency}</p>
      <p className="font-semibold text-contentSecondary">
        {searchResult.exchangeShortName} — {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
