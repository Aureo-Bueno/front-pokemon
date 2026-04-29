/**
 * @file src/routes/index.tsx
 * Application routing configuration.
 */

import {
  Suspense,
  lazy,
  type JSX,
} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/layout";

const LoadingFallback = () => (
  <div style={{ padding: "32px 0", textAlign: "center", color: "#94a3b8" }}>
    Carregando...
  </div>
);

const Home = lazy(() =>
  import("../pages/home").then((module) => ({ default: module.Home })),
);

const PokemonList = lazy(() =>
  import("../pages/pokemon").then((module) => ({ default: module.PokemonList })),
);

const PokemonDetailPage = lazy(() =>
  import("../pages/pokemon-detail").then((module) => ({
    default: module.PokemonDetailPage,
  })),
);

const BerryPage = lazy(() =>
  import("../pages/berry").then((module) => ({ default: module.BerryPage })),
);

const ItemPage = lazy(() =>
  import("../pages/item").then((module) => ({ default: module.ItemPage })),
);

const LocationPage = lazy(() =>
  import("../pages/location").then((module) => ({
    default: module.LocationPage,
  })),
);

const NotFound = lazy(() =>
  import("../pages/not-found").then((module) => ({ default: module.NotFound })),
);

/**
 * Browser router with all application routes and layout nesting.
 */
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

/**
 * Renders the Router view component.
 */
export function Router(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
