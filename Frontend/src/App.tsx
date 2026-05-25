import { Outlet } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/useAuth';

function App() {
  return (
    <UserProvider>
      <div className="flex min-h-screen flex-col bg-surfaceCanvas">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
          toastClassName="!rounded-btn !font-sans"
        />
      </div>
    </UserProvider>
  );
}

export default App;
