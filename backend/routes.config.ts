import { getAllTest } from './routes/test';

export const RouteConfig = [
  {
    path: '/tests',
    method: 'get',
    action: getAllTest
  }
];
