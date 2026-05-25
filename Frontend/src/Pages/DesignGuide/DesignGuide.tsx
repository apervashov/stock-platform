import type { ReactNode, SyntheticEvent } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";
import AddPortfolio from "../../components/Portfolio/AddPortfolio/AddPortfolio";
import CardPortfolio from "../../components/Portfolio/CardPortfolio/CardPortfolio";
import DeletePortfolio from "../../components/Portfolio/DeletePortfolio/DeletePortfolio";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import RatioList from "../../components/RatioList/RatioList";
import Table from "../../components/Table/Table";
import Tile from "../../components/Tile/Tile";
import CompanyProfile from "../../components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../../components/IncomeStatement/IncomeStatement";
import BalanceSheet from "../../components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../../components/CashFlowStatement/CashFlowStatement";
import StockComment from "../../components/StockComment/StockComment";
import StockCommentForm from "../../components/StockComment/StockCommentForm";
import StockCommentList from "../../components/StockCommentList/StockCommentList";
import StockCommentListItem from "../../StockCommentListItem/StockCommentListItem";
import type { CompanySearch } from "../../company";
import type { CommentGet } from "../../Models/Comment";
import type { PortfolioGet } from "../../Models/Portfolio";

type ShowcaseSectionProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

type ShowcaseCardProps = {
  title: string;
  path: string;
  children: ReactNode;
  note?: string;
};

type MetricSnapshot = {
  symbol: string;
  marketCap: string;
  currentRatio: number;
  returnOnEquity: string;
  cashPerShare: string;
};

type IncomeRow = {
  cik: string;
  date: string;
  revenue: string;
  netIncome: string;
  eps: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const navigationItems = [
  { href: "#tokens", label: "Tokens" },
  { href: "#navigation", label: "Navigation" },
  { href: "#marketing", label: "Marketing" },
  { href: "#search", label: "Search" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#tables", label: "Tables" },
  { href: "#comments", label: "Comments" },
  { href: "#routes", label: "Route components" },
];

const companySearchResult: CompanySearch = {
  currency: "USD",
  exchangeShortName: "NASDAQ",
  name: "Apple Inc.",
  stockExchange: "Nasdaq Global Select",
  symbol: "AAPL",
};

const searchResults: CompanySearch[] = [
  companySearchResult,
  {
    currency: "USD",
    exchangeShortName: "NASDAQ",
    name: "Microsoft Corporation",
    stockExchange: "Nasdaq Global Select",
    symbol: "MSFT",
  },
];

const portfolioItem: PortfolioGet = {
  id: 1,
  symbol: "AAPL",
  companyName: "Apple Inc.",
  purchase: 184.75,
  lastDiv: 0.24,
  industry: "Consumer Electronics",
  marketCap: 2850000000000,
  comments: [],
};

const portfolioItems: PortfolioGet[] = [
  portfolioItem,
  {
    id: 2,
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    purchase: 421.5,
    lastDiv: 0.75,
    industry: "Software",
    marketCap: 3120000000000,
    comments: [],
  },
];

const metricSnapshot: MetricSnapshot = {
  symbol: "AAPL",
  marketCap: "$2.85T",
  currentRatio: 1.07,
  returnOnEquity: "156.0%",
  cashPerShare: "$4.12",
};

const companyProfileMetrics = {
  marketCapTTM: 2850000000000,
  currentRatioTTM: 1.07,
  roeTTM: 1.56,
  cashPerShareTTM: 4.12,
};

const metricConfig = [
  {
    label: "Symbol",
    subTitle: "Ticker",
    render: (company: MetricSnapshot) => company.symbol,
  },
  {
    label: "Market Cap",
    subTitle: "TTM",
    render: (company: MetricSnapshot) => company.marketCap,
  },
  {
    label: "Current Ratio",
    subTitle: "Liquidity",
    render: (company: MetricSnapshot) => company.currentRatio,
  },
  {
    label: "Return On Equity",
    subTitle: "Profitability",
    render: (company: MetricSnapshot) => company.returnOnEquity,
  },
  {
    label: "Cash Per Share",
    subTitle: "Per share",
    render: (company: MetricSnapshot) => company.cashPerShare,
  },
];

const incomeRows: IncomeRow[] = [
  {
    cik: "0000320193-2024",
    date: "2024",
    revenue: "$383.29B",
    netIncome: "$96.99B",
    eps: "$6.13",
  },
  {
    cik: "0000320193-2023",
    date: "2023",
    revenue: "$394.33B",
    netIncome: "$99.80B",
    eps: "$6.11",
  },
  {
    cik: "0000320193-2022",
    date: "2022",
    revenue: "$365.82B",
    netIncome: "$94.68B",
    eps: "$5.61",
  },
];

const mockedIncomeStatements = [
  {
    cik: "0000320193-2024",
    date: "2024",
    revenue: 383285000000,
    netIncome: 96995000000,
    operatingExpenses: 54847000000,
    costOfRevenue: 214137000000,
  },
  {
    cik: "0000320193-2023",
    date: "2023",
    revenue: 394328000000,
    netIncome: 99803000000,
    operatingExpenses: 51345000000,
    costOfRevenue: 223546000000,
  },
];

const mockedBalanceSheet = {
  cashAndCashEquivalents: 29965000000,
  inventory: 6331000000,
  otherCurrentAssets: 14695000000,
  minorityInterest: 0,
  otherNonCurrentAssets: 64758000000,
  longTermDebt: 95281000000,
  otherCurrentLiabilities: 58829000000,
};

const mockedCashFlows = [
  {
    cik: "0000320193-cf-2024",
    date: "2024",
    operatingCashFlow: 118254000000,
    investmentsInPropertyPlantAndEquipment: -9447000000,
    otherInvestingActivites: -1308000000,
    netCashUsedProvidedByFinancingActivities: -108488000000,
    capitalExpenditure: -9447000000,
    freeCashFlow: 108807000000,
  },
  {
    cik: "0000320193-cf-2023",
    date: "2023",
    operatingCashFlow: 110543000000,
    investmentsInPropertyPlantAndEquipment: -10959000000,
    otherInvestingActivites: -1608000000,
    netCashUsedProvidedByFinancingActivities: -108488000000,
    capitalExpenditure: -10959000000,
    freeCashFlow: 99584000000,
  },
];

const incomeTableConfig = [
  {
    label: "Date",
    render: (row: IncomeRow) => row.date,
  },
  {
    label: "Revenue",
    render: (row: IncomeRow) => row.revenue,
  },
  {
    label: "Net Income",
    render: (row: IncomeRow) => row.netIncome,
  },
  {
    label: "EPS",
    render: (row: IncomeRow) => row.eps,
  },
];

const comments: CommentGet[] = [
  {
    title: "Strong services margin",
    content: "Services keep improving the revenue mix and make earnings less hardware dependent.",
    createdBy: "analyst-jane",
  },
  {
    title: "Watch buybacks",
    content: "Buybacks continue to support EPS, but revenue growth still needs a catalyst.",
    createdBy: "portfolio-max",
  },
];

const handleSyntheticAction = (event: SyntheticEvent) => {
  event.preventDefault();
};

const handleComment = (_form: CommentFormInputs) => {
  return;
};

const ShowcaseSection = ({
  id,
  title,
  description,
  children,
}: ShowcaseSectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brandLink">
          Story section
        </p>
        <h2 className="mt-2 text-3xl font-bold text-contentPrimary">{title}</h2>
        <p className="mt-2 max-w-3xl text-contentSecondary">{description}</p>
      </div>
      <div className="grid gap-5">{children}</div>
    </section>
  );
};

const ShowcaseCard = ({ title, path, children, note }: ShowcaseCardProps) => {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
      <div className="border-b border-line bg-surfaceMuted px-5 py-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-contentPrimary">{title}</h3>
          <code className="rounded-full bg-surface px-3 py-1 text-xs text-contentSecondary">
            {path}
          </code>
        </div>
        {note ? <p className="mt-2 text-sm text-contentSecondary">{note}</p> : null}
      </div>
      <div className="p-5">{children}</div>
    </article>
  );
};

const TokenSwatch = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  return (
    <div className="rounded-card border border-line bg-surface p-4 shadow-card">
      <div className={`h-16 rounded-btn ${className}`} />
      <p className="mt-3 font-semibold text-contentPrimary">{name}</p>
    </div>
  );
};

const DesignGuide = () => {
  return (
    <div className="bg-surfaceCanvas">
      <header className="border-b border-line bg-surface">
        <div className="container mx-auto px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brandLink">
            FinShark Design System
          </p>
          <div className="mt-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-contentPrimary lg:text-6xl">
              Component Storybook
            </h1>
            <p className="mt-4 text-lg text-contentSecondary">
              A visual inventory of reusable UI pieces, route-connected shells, and
              design tokens used across the frontend.
            </p>
          </div>
          <nav className="mt-8 flex flex-wrap gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-contentSecondary transition-colors hover:border-brandLink hover:text-brandLink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto space-y-14 px-6 py-12">
        <ShowcaseSection
          id="tokens"
          title="Tokens and primitives"
          description="Base colors, surfaces, inputs, and button classes from Tailwind config and index.css."
        >
          <ShowcaseCard title="Color Tokens" path="tailwind.config.js">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <TokenSwatch name="surface" className="bg-surface" />
              <TokenSwatch name="surfaceMuted" className="bg-surfaceMuted" />
              <TokenSwatch name="brandLink" className="bg-brandLink" />
              <TokenSwatch name="lightGreen" className="bg-lightGreen" />
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="Buttons and Input" path="src/index.css">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <button type="button" className="btn-primary">
                Primary action
              </button>
              <button type="button" className="btn-secondary">
                Secondary action
              </button>
              <input className="input-field md:max-w-sm" placeholder="Input field" />
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="Tile" path="components/Tile/Tile.tsx">
            <div className="-mx-4 flex flex-wrap">
              <Tile title="Market Cap" subTitle="$2.85T" />
              <Tile title="EPS" subTitle="$6.13" />
              <Tile title="Dividend" subTitle="$0.24" />
            </div>
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="navigation"
          title="Navigation"
          description="Global and company-level navigation blocks."
        >
          <ShowcaseCard
            title="Navbar"
            path="components/Navbar/Navbar.tsx"
            note="The real app navbar is also visible above the route because App.tsx renders it globally."
          >
            <div className="overflow-hidden rounded-card border border-line">
              <Navbar />
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="Sidebar" path="components/Sidebar/Sidebar.tsx">
            <div className="relative h-80 overflow-hidden rounded-card border border-line bg-surfaceMuted">
              <Sidebar />
            </div>
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="marketing"
          title="Marketing"
          description="Landing page presentation components."
        >
          <ShowcaseCard title="Hero" path="components/Hero/Hero.tsx">
            <div className="overflow-hidden rounded-card border border-line bg-surface">
              <Hero />
            </div>
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="search"
          title="Search"
          description="Search input, result card, and result list states."
        >
          <ShowcaseCard title="Search" path="components/Search/Search.tsx">
            <Search
              search="AAPL"
              handleChange={() => undefined}
              onClick={handleSyntheticAction}
            />
          </ShowcaseCard>

          <ShowcaseCard title="Card" path="components/Card/Card.tsx">
            <Card
              id="design-guide-card"
              searchResult={companySearchResult}
              onPortfolioCreate={handleSyntheticAction}
            />
          </ShowcaseCard>

          <ShowcaseCard title="CardList" path="components/CardList/CardList.tsx">
            <div className="space-y-4">
              <CardList
                searchResults={searchResults}
                onPortfolioCreate={handleSyntheticAction}
              />
            </div>
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="portfolio"
          title="Portfolio"
          description="Portfolio mutation controls and portfolio card/list states."
        >
          <ShowcaseCard title="AddPortfolio" path="components/Portfolio/AddPortfolio/AddPortfolio.tsx">
            <AddPortfolio symbol="AAPL" onPortfolioCreate={handleSyntheticAction} />
          </ShowcaseCard>

          <ShowcaseCard title="DeletePortfolio" path="components/Portfolio/DeletePortfolio/DeletePortfolio.tsx">
            <div className="max-w-xs">
              <DeletePortfolio
                portfolioValue="AAPL"
                onPortfolioDelete={handleSyntheticAction}
              />
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="CardPortfolio" path="components/Portfolio/CardPortfolio/CardPortfolio.tsx">
            <CardPortfolio
              portfolioValue={portfolioItem}
              onPortfolioDelete={handleSyntheticAction}
            />
          </ShowcaseCard>

          <ShowcaseCard title="PortfolioList" path="components/Portfolio/PortfolioList/PortfolioList.tsx">
            <PortfolioList
              portfolioValues={portfolioItems}
              onPortfolioDelete={handleSyntheticAction}
            />
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="dashboard"
          title="Dashboard shell"
          description="Company detail layout shells used by nested company routes."
        >
          <ShowcaseCard title="CompanyDashboard" path="components/CompanyDashboard/CompanyDashboard.tsx">
            <div className="overflow-hidden rounded-card border border-line">
              <CompanyDashboard ticker="AAPL">
                <Tile title="Ticker" subTitle="AAPL" />
                <Tile title="Price" subTitle="$184.75" />
              </CompanyDashboard>
            </div>
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="tables"
          title="Tables and ratio lists"
          description="Data display components that power the financial statement views."
        >
          <ShowcaseCard title="RatioList" path="components/RatioList/RatioList.tsx">
            <RatioList config={metricConfig} data={metricSnapshot} />
          </ShowcaseCard>

          <ShowcaseCard title="Table" path="components/Table/Table.tsx">
            <Table config={incomeTableConfig} data={incomeRows} />
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="comments"
          title="Comments"
          description="Comment form, list, and list item states without hitting the API."
        >
          <ShowcaseCard title="StockCommentForm" path="components/StockComment/StockCommentForm.tsx">
            <StockCommentForm symbol="AAPL" handleComment={handleComment} />
          </ShowcaseCard>

          <ShowcaseCard title="StockCommentListItem" path="StockCommentListItem/StockCommentListItem.tsx">
            <StockCommentListItem comment={comments[0]} />
          </ShowcaseCard>

          <ShowcaseCard title="StockCommentList" path="components/StockCommentList/StockCommentList.tsx">
            <StockCommentList comments={comments} />
          </ShowcaseCard>
        </ShowcaseSection>

        <ShowcaseSection
          id="routes"
          title="API-backed route components"
          description="These are the same components used in company routes, mounted here with mock data instead of live API calls."
        >
          <ShowcaseCard
            title="CompanyProfile"
            path="components/CompanyProfile/CompanyProfile.tsx"
            note="Uses mocked key metrics and mocked comments."
          >
            <CompanyProfile
              ticker="AAPL"
              mockData={companyProfileMetrics}
              mockComments={comments}
            />
          </ShowcaseCard>

          <ShowcaseCard
            title="IncomeStatement"
            path="components/IncomeStatement/IncomeStatement.tsx"
            note="Uses mocked income statement rows."
          >
            <IncomeStatement ticker="AAPL" mockData={mockedIncomeStatements} />
          </ShowcaseCard>

          <ShowcaseCard
            title="BalanceSheet"
            path="components/BalanceSheet/BalanceSheet.tsx"
            note="Uses a mocked balance sheet snapshot."
          >
            <BalanceSheet ticker="AAPL" mockData={mockedBalanceSheet} />
          </ShowcaseCard>

          <ShowcaseCard
            title="CashFlowStatement"
            path="components/CashFlowStatement/CashFlowStatement.tsx"
            note="Uses mocked cash flow rows."
          >
            <CashFlowStatement ticker="AAPL" mockData={mockedCashFlows} />
          </ShowcaseCard>

          <ShowcaseCard
            title="StockComment"
            path="components/StockComment/StockComment.tsx"
            note="Uses mocked comments and does not call the comments API."
          >
            <StockComment stockSymbol="AAPL" mockComments={comments} />
          </ShowcaseCard>
        </ShowcaseSection>
      </main>
    </div>
  );
};

export default DesignGuide;