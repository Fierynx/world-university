import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import ContextPool from "./pages/ContextPool";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import CountryFilterPage from "./pages/CountryFilterPage";
import CountrySearchPage from "./pages/CountrySearchPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContextPool />,
    children: [
      {
        path: '/',
        element: <AppLayout/>,
        children: [
          {
            path: '',
            element: <HomePage />,
          },
          {
            path: 'country-detail/:name',
            element: <CountryDetailPage/>
          },
          {
            path: 'country-search',
            element: <CountrySearchPage/>
          },
          {
            path: 'country-filter',
            element: <CountryFilterPage/>
          },
          {
            path: 'about',
            element: <AboutPage/>
          },
        ]
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}