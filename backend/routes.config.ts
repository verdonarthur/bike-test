import { getAllTest, postOneTest } from './routes/test';

export const RouteConfig = [
  {
    path: '/tests',
    method: 'get',
    action: getAllTest
  },
  {
    path: '/tests',
    method: 'post',
    action: postOneTest
  }
];
