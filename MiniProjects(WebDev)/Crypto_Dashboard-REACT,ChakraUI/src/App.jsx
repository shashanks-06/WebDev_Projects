import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboad from "./pages/Dashboard/Dashboad";
import TransactionPage from "./pages/Transaction/TransactionPage";
import Support from "./pages/Support/Support";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboad />,
    },
    {
      path: "/transactions",
      element: <TransactionPage />,
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
