import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { CompanyKeyMetrics } from "../../company";
import { CommentGet } from "../../Models/Comment";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import StockComment from "../StockComment/StockComment";

type CompanyMetricSnapshot = Pick<
  CompanyKeyMetrics,
  "marketCapTTM" | "currentRatioTTM" | "roeTTM" | "cashPerShareTTM"
>;

type Props = {
  ticker?: string;
  mockData?: CompanyMetricSnapshot;
  mockComments?: CommentGet[];
};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyMetricSnapshot) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyMetricSnapshot) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyMetricSnapshot) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyMetricSnapshot) => company.cashPerShareTTM,
  },
];

const CompanyProfile = ({ ticker, mockData, mockComments }: Props) => {
  const routeTicker = useOutletContext<string | undefined>();
  const stockSymbol = ticker ?? routeTicker ?? "AAPL";
  const [companyData, setCompanyData] = useState<
    CompanyMetricSnapshot | undefined
  >(mockData);

  useEffect(() => {
    if (mockData) {
      setCompanyData(mockData);
      return;
    }

    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(stockSymbol);
      setCompanyData(value?.data[0]);
    };

    getCompanyKeyMetrics();
  }, [mockData, stockSymbol]);

  return (
    <>
      {companyData ? (
        <>
          <RatioList data={companyData} config={tableConfig} />
          <StockComment stockSymbol={stockSymbol} mockComments={mockComments} />
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default CompanyProfile;