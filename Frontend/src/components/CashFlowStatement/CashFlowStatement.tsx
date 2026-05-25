import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyCashFlow } from "../../company";
import { getCashFlow } from "../../api";
import Table from "../Table/Table";

type CashFlowRow = Pick<
  CompanyCashFlow,
  | "date"
  | "operatingCashFlow"
  | "investmentsInPropertyPlantAndEquipment"
  | "otherInvestingActivites"
  | "netCashUsedProvidedByFinancingActivities"
  | "capitalExpenditure"
  | "freeCashFlow"
  | "cik"
>;

type Props = {
  ticker?: string;
  mockData?: CashFlowRow[];
};

const config = [
  {
    label: "Date",
    render: (company: CashFlowRow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CashFlowRow) => company.operatingCashFlow,
  },
  {
    label: "Property/Machinery Cashflow",
    render: (company: CashFlowRow) =>
      company.investmentsInPropertyPlantAndEquipment,
  },
  {
    label: "Other Investing Cashflow",
    render: (company: CashFlowRow) => company.otherInvestingActivites,
  },
  {
    label: "Debt Cashflow",
    render: (company: CashFlowRow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "CapEX",
    render: (company: CashFlowRow) => company.capitalExpenditure,
  },
  {
    label: "Free Cash Flow",
    render: (company: CashFlowRow) => company.freeCashFlow,
  },
];

const CashflowStatement = ({ ticker, mockData }: Props) => {
  const routeTicker = useOutletContext<string | undefined>();
  const stockSymbol = ticker ?? routeTicker ?? "AAPL";
  const [cashFlowData, setCashFlowData] = useState<CashFlowRow[] | undefined>(
    mockData,
  );

  useEffect(() => {
    if (mockData) {
      setCashFlowData(mockData);
      return;
    }

    const getRatios = async () => {
      const result = await getCashFlow(stockSymbol);
      setCashFlowData(result!.data);
    };

    getRatios();
  }, [mockData, stockSymbol]);

  return cashFlowData ? (
    <Table config={config} data={cashFlowData}></Table>
  ) : (
    <h1>no results</h1>
  );
};

export default CashflowStatement;