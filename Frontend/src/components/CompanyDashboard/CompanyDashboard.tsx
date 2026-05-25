import * as React from 'react';
import { Outlet } from 'react-router';

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative w-full bg-surfaceMuted md:ml-64">
      <div className="relative bg-brandLink pb-32 pt-20">
        <div className="mx-auto w-full px-4 md:px-6">
          <div className="flex flex-wrap">{children}</div>
          <div className="flex flex-wrap">
            <Outlet context={ticker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
