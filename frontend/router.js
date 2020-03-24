const ROUTES_CONFIG = [
  {
    path: '/',
    divId: 'homepage'
  },
  {
    path: '/home',
    divId: 'homepage'
  },
  {
    path: '/test',
    divId: 'testpage'
  }
];

function getPageFromConfig(path) {
  return ROUTES_CONFIG.find(page => page.path === path);
}

export function initRouting() {
  $('main > *').hide();

  if (window.location.hash.includes('#')) {
    navigateTo(window.location.hash.substring(1));
  } else {
    navigateTo('/');
  }

  $(window).on('hashchange', e => {
    navigateTo(window.location.hash.substring(1));
  });
}

export function navigateTo(path) {
  $('main > *').hide();
  let pageToNavigateTo = getPageFromConfig(path);

  if (!pageToNavigateTo) {
    window.location = '404.html';
    return;
  }

  $(`#${pageToNavigateTo.divId}`).show();
}
