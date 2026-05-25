import { useEffect, useState } from "react";
import { CompanyBalanceSheet } from "../../company";
import { useOutletContext } from "react-router-dom";
import RatioList from "../RatioList/RatioList";
import { getBalanceSheet } from "../../api";

type BalanceSheetSnapshot = Pick<
  CompanyBalanceSheet,
  | "cashAndCashEquivalents"
  | "inventory"
  | "otherCurrentAssets"
  | "minorityInterest"
  | "otherNonCurrentAssets"
  | "longTermDebt"
  | "otherCurrentLiabilities"
>;

type Props = {
  ticker?: string;
  mockData?: BalanceSheetSnapshot;
};

const config = [
  {
    label: "Cash",
    render: (company: BalanceSheetSnapshot) => company.cashAndCashEquivalents,
  },
  {
    label: "Inventory",
    render: (company: BalanceSheetSnapshot) => company.inventory,
  },
  {
    label: "Other Current Assets",
    render: (company: BalanceSheetSnapshot) => company.otherCurrentAssets,
  },
  {
    label: "Minority Interest",
    render: (company: BalanceSheetSnapshot) => company.minorityInterest,
  },
  {
    label: "Other Non-Current Assets",
    render: (company: BalanceSheetSnapshot) => company.otherNonCurrentAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: BalanceSheetSnapshot) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: BalanceSheetSnapshot) => company.otherCurrentLiabilities,
  },
];

const BalanceSheet = ({ ticker, mockData }: Props) => {
  const routeTicker = useOutletContext<string | undefined>();
  const stockSymbol = ticker ?? routeTicker ?? "AAPL";
  const [companyData, setCompanyData] = useState<
    BalanceSheetSnapshot | undefined
  >(mockData);

  useEffect(() => {
    if (mockData) {
      setCompanyData(mockData);
      return;
    }

    const getCompanyData = async () => {
      const value = await getBalanceSheet(stockSymbol);
      setCompanyData(value?.data[0]);
    };

    getCompanyData();
  }, [mockData, stockSymbol]);

  return (
    <>
      {companyData ? (
        <RatioList config={config} data={companyData} />
      ) : (
        <h1>Company data not found</h1>
      )}
    </>
  );
};

export default BalanceSheet;