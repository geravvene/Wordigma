import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './css/App.css';
import Footer from './ui/MainInterface/Footer.jsx';
import Header from './ui/MainInterface/Header.jsx';
import AuthorPage from './screens/AuthorPage';
import Authorization from './screens/Authorization';
import Profile from './screens/Profile';
import QuotesList from './ui/Quotes/QuotesList';
import { Navigate } from 'react-router-dom';
import AuthorList from './ui/Authors/AuthorList';
import CreatePage from './screens/CreatePage';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import useActions from './hooks/useActions';
import { DataService } from './services/data.service';
const Router = () => {
  const user = useSelector((state) => state.userReducer);
  const { change } = useActions();
  useQuery(['user'], () => DataService.getData(`/users/${user._id}`), {
    enabled: !!user,
    onSuccess: (data) => change(data),
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className={`ml-3 mr-6 mb-6 mt-3 flex-auto relative h-full`}>
          <Routes>
            <Route element={<Navigate to="/reg" />} path={`/`} />
            <Route element={<Authorization />} path={`/reg`} />
            <Route element={<QuotesList title={'Цитаты'} />} path={`/rec`} />
            <Route element={<AuthorList />} path={`/authors`} />
            <Route element={<AuthorPage />} path={`/authors/:id`} />
            <Route element={<Profile />} path={`/acc`} />
            <Route element={<CreatePage />} path={`/create`} />
            <Route element={<div> Not Found </div>} path={`*`} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Router;
