import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
