import { getAllTest, postOneTest } from './routes/test';

export const RouteConfig = [
  {
    path: '/api/tests',
    method: 'get',
    action: getAllTest
  },
  {
    path: '/api/tests',
    method: 'post',
    action: postOneTest
  }
];
