import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './components/Root';

const Home = () => {
  return <div>Home Content</div>;
};

const NewPatients = () => {
  return <div>NewPatients Content</div>;
};

const Products = () => {
  return <div>Products Content</div>;
};

const Services = () => {
  return <div>Services Content</div>;
};

const Reviews = () => {
  return <div>Reviews Content</div>;
};

const Contact = () => {
  return <div>Contact Content</div>;
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
      { path: 'reviews', element: <Reviews /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
