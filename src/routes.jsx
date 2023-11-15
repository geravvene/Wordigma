import { Navigate } from 'react-router-dom';

import AuthorPage from './views/AuthorPage.jsx';
import Authorization from './views/Authorization.jsx';
import Profile from './views/Profile.jsx';
import QuotesList from './components/Quotes/QuotesList.jsx';
import AuthorList from './components/authors/AuthorList.jsx';
import CreatePage from './views/CreatePage.jsx';

export const routes = [
  {
    path: '/',
    component: <Navigate to="/reg" />,
  },
  {
    path: '/reg',
    component: <Authorization />,
  },
  {
    path: '/rec',
    component: <QuotesList title={'Цитаты'} />,
  },
  {
    path: '/authors',
    component: <AuthorList />,
  },
  {
    path: '/authors/:id',
    component: <AuthorPage />,
  },
  {
    path: '/acc',
    component: <Profile />,
  },
  {
    path: '/create',
    component: <CreatePage />,
  },
  {
    path: '*',
    component: <div> Not Found </div>,
  },
];