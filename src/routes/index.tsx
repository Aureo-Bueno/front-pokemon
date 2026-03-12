import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { JSX } from "react";
import { Layout } from "../components/layout";
import { NotFound } from "../pages/not-found";
import { Home } from "../pages/home";
import { PokemonList } from "../pages/pokemon";
import { BerryPage } from "../pages/berry";
import { ItemPage } from "../pages/item";
import { LocationPage } from "../pages/location";
import { PokemonDetailPage } from "../pages/pokemon-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pokemons",
        element: <PokemonList />,
      },
      {
        path: "pokemons/:id",
        element: <PokemonDetailPage />,
      },
      {
        path: "berries",
        element: <BerryPage />,
      },
      {
        path: "items",
        element: <ItemPage />,
      },
      {
        path: "locations",
        element: <LocationPage />,
      },
    ],
  },
]);

export function Router(): JSX.Element {
  return <RouterProvider router={router} />;
}
