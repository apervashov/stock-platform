import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="absolute left-0 top-0 bottom-0 z-40 block w-64 flex-row flex-nowrap bg-surface px-6 py-4 shadow-xl transition-all duration-300 ease-in-out md:z-10 md:translate-x-0 -translate-x-full">
      <button type="button" className="absolute top-1/2 -right-6 flex h-10 w-6 cursor-pointer items-center justify-center rounded-r border border-line bg-surface text-blueGray-700 focus:outline-none focus:ring-2 focus:ring-brandLink md:hidden">
        <i className="fas fa-ellipsis-v"></i>
      </button>

      <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
        <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
          <div className="md:flex-col md:min-w-full flex flex-col list-none">
            <Link
              to="company-profile"
              className="flex items-center pb-4 font-bold uppercase text-blueGray-500 no-underline transition-colors hover:text-brandLink"
            >
                <FaHome/>
                <h6 className="ml-3">Company Profile</h6>  
            </Link>
            <Link
              to="income-statement"
              className="flex items-center pb-4 font-bold uppercase text-blueGray-500 no-underline transition-colors hover:text-brandLink"
            >
                <FaHome/>
                <h6 className="ml-3">Income Statement</h6>  
            </Link>
            <Link
              to="balance-sheet"
              className="flex items-center pb-4 font-bold uppercase text-blueGray-500 no-underline transition-colors hover:text-brandLink"
            >
                <FaHome/>
                <h6 className="ml-3">Balance Sheet</h6>  
            </Link>
            <Link
              to="cashflow-statement"
              className="flex items-center pb-4 font-bold uppercase text-blueGray-500 no-underline transition-colors hover:text-brandLink"
            >
                <FaHome/>
                <h6 className="ml-3">Cashflow Statement</h6>  
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
