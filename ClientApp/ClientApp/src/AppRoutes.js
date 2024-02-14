import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import NewClient from "./components/NewClient";
import UpdateClient from "./components/UpdateClient";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/new-client/',
        element: <NewClient />
    },
    {
        path: '/update-client/:id',
        element: <UpdateClient />
    }
];

export default AppRoutes;
