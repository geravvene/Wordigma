import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import  '@/css/App.css';
import Footer from '@ui/Footer.jsx';
import Header from '@ui/Header.jsx';
import useActions from '@hooks/useActions';
import { DataService } from '@serv/data.service';
import { routes } from '@/routes';

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} element={component} key={key} />
));

const Router = () => {
  const user_id = useSelector((state) => state.userReducer?._id);

  const { change } = useActions();

  useQuery(['user'], () => DataService.getData(`/users/${user_id}`), {
    enabled: !!user_id,
    onSuccess: (data) => change(data),
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className={`ml-3 mr-6 mb-6 mt-14 flex-auto relative h-full`}>
          <Routes>{routeComponents}</Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Router;
