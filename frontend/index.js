import { initRouting } from './router';
import { initTemplate } from './libs/template';
import { TestPage } from './tests';

$(document).ready(() => {
  initTemplate();
  initRouting();
  TestPage.initTestPage();
});
