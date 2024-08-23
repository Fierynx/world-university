import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}