import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Root from './components/Root';
import { lorem10 } from './mockData/mockData';
import PageContainer from './components/PageLayout';
import { getProducts } from './store/products-thunks';

const Home = () => {
  return (
    <PageContainer>
      <h1>Home</h1>
      <div>{lorem10}</div>
    </PageContainer>
  );
};

const NewPatients = () => {
  return (
    <PageContainer>
      <h1>NewPatients Content</h1>
      <div>{lorem10}</div>
    </PageContainer>
  );
};

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let { productId } = useParams();

  if (productId) {
    console.log(productId);
  } else {
    console.log('No product ID');
  }

  return (
    <PageContainer>
      <h1>{`Products ${productId ? `${productId}` : 'All'}`}</h1>
      <div>{lorem10}</div>
    </PageContainer>
  );
};

const Services = () => {
  return (
    <PageContainer>
      <h1>Services Content</h1>
      <div>{lorem10}</div>
    </PageContainer>
  );
};

const Resources = () => {
  return (
    <PageContainer>
      <h1>Resources Content</h1>
      <div>{lorem10}</div>
    </PageContainer>
  );
};

const Contact = () => {
  return (
    <PageContainer>
      <h1>Contact Content</h1>
      <div>{lorem10}</div>
    </PageContainer>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'new-patients', element: <NewPatients /> },
      {
        path: 'products',
        element: <Products />,
        children: [
          {
            path: ':productId',
            element: <Products />
          }
        ]
      },
      {
        path: 'services',
        element: <Services />,
        children: [
          {
            path: ':serviceId',
            element: <Services />
          }
        ]
      },
      {
        path: 'resources',
        element: <Resources />,
        children: [
          {
            path: ':resourceId',
            element: <Resources />
          }
        ]
      },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
