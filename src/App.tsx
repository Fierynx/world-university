import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import ContextPool from "./pages/ContextPool";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContextPool />,
    children: [
      {
        path: '/',
        element: <AppLayout/>,
        children: [

        ]
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}