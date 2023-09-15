import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './components/Root';
import { lorem10 } from './mockData/mockData';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>{lorem10}</div>
    </div>
  );
};

const NewPatients = () => {
  return (
    <div>
      <h1>NewPatients Content</h1>
      <div>{lorem10}</div>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h1>Products Content</h1>
      <div>{lorem10}</div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <h1>Services Content</h1>
      <div>{lorem10}</div>
    </div>
  );
};

const Resources = () => {
  return (
    <div>
      <h1>Resources Content</h1>
      <div>{lorem10}</div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Content</h1>
      <div>{lorem10}</div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Error!</div>,
    children: [
      { index: true, element: <Home /> },
      { path: 'new-patients', element: <NewPatients /> },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'resources',
        element: <Resources />
      },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
