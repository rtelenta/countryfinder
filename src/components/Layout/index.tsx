import { Link } from "react-router-dom";
import { routes } from "routes/routing";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" data-testid="Layout">
      <header className="bg-white px-4 md:px-8 py-4 flex-none border-b boder-gray-400">
        <div className="max-w-7xl mx-auto">
          <Link
            to={routes.home}
            className="font-extrabold text-gray-900 text-xl hover:text-indigo-600"
          >
            COUNTRYFINDER
          </Link>
        </div>
      </header>

      <div className="md:px-8 flex-auto">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </div>

      <footer className="flex-none border-t border-gray-400 text-gray-900 text-center py-4 mt-16">
        Hecho por Renzo Telenta
      </footer>
    </div>
  );
};

export default Layout;
