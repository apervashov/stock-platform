import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { CompanyIncomeStatement } from "../../company";
import { getIncomeStatement } from "../../api";

type IncomeStatementRow = Pick<
  CompanyIncomeStatement,
  | "date"
  | "revenue"
  | "netIncome"
  | "operatingExpenses"
  | "costOfRevenue"
  | "cik"
>;

type Props = {
  ticker?: string;
  mockData?: IncomeStatementRow[];
};

const configs = [
  {
    label: "Date",
    render: (company: IncomeStatementRow) => company.date,
  },
  {
    label: "Total Revenue",
    render: (company: IncomeStatementRow) => company.revenue,
  },
  {
    label: "Net Income",
    render: (company: IncomeStatementRow) => company.netIncome,
  },
  {
    label: "Operating Expenses",
    render: (company: IncomeStatementRow) => company.operatingExpenses,
  },
  {
    label: "Cost of Revenue",
    render: (company: IncomeStatementRow) => company.costOfRevenue,
  },
];

const IncomeStatement = ({ ticker, mockData }: Props) => {
  const routeTicker = useOutletContext<string | undefined>();
  const stockSymbol = ticker ?? routeTicker ?? "AAPL";
  const [incomeStatement, setIncomeStatement] = useState<
    IncomeStatementRow[] | undefined
  >(mockData);

  useEffect(() => {
    if (mockData) {
      setIncomeStatement(mockData);
      return;
    }

    const getRatios = async () => {
      const result = await getIncomeStatement(stockSymbol);
      setIncomeStatement(result!.data);
    };

    getRatios();
  }, [mockData, stockSymbol]);

  return (
    <>
      {incomeStatement ? (
        <Table config={configs} data={incomeStatement} />
      ) : (
        <h1>Could not find income statement.</h1>
      )}
    </>
  );
};

export default IncomeStatement;