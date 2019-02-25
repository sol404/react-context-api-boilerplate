import HomePage from 'containers/HomePage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default () => [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: true,
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
