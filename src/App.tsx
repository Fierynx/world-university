import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import ContextPool from "./pages/ContextPool";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";

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
            path: 'country-detail',
            element: <CountryDetailPage/>
          },
        ]
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}