import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/templates/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
