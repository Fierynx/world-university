import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import ContextPool from "./pages/ContextPool";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import CountryFilterSearchPage from "./pages/CountryFilterSearchPage";
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
            path: 'country-detail/:cca3/:name',
            element: <CountryDetailPage/>
          },
          {
            path: 'country-filter-search',
            element: <CountryFilterSearchPage/>
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