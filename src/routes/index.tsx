import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout';
import NotFound from '../pages/not-found';
import Home from '../pages/home';
import PokemonList from '../pages/pokemon';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pokemons',
        element: <PokemonList />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
