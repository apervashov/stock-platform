import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/useAuth';

interface Props {}

const Navbar = (_props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-surface shadow-sm">
      <div className="container relative mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-8 md:gap-12">
          <Link to="/" className="flex shrink-0 items-center">
            <span className="text-xl font-bold tracking-tight text-brandLink">
              FinShark
            </span>
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="link-nav">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden items-center gap-6 lg:flex">
            <span className="text-contentSecondary">
              Welcome, {user?.userName}
            </span>
            <button type="button" onClick={logout} className="btn-primary">
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden items-center gap-6 lg:flex">
            <Link to="/login" className="link-nav">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
