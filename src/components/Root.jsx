import { Outlet } from 'react-router-dom';

import MainHeader from './MainHeader';

const Root = () => {
  return (
    <>
      <MainHeader/>
      <Outlet />
    </>
  );
};

export default Root;
