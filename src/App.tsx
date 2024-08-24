import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import ContextPool from "./pages/ContextPool";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

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
            path: '/',
            element: <Home />,
          },
          {
            path: '/country-detail',
            element: <CountryDetail/>
          },
        ]
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}