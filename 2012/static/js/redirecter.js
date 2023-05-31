const currentUrl = new URL(window.location.href);
const path = currentUrl.pathname + currentUrl.search;

const map = {
  '/2012/talk/schedule?date=2012-09-27': '/2012/talk/schedule@date=2012-09-27.html',
  '/2012/talk/schedule?date=2012-09-28': '/2012/talk/schedule@date=2012-09-28.html',
  '/2012/talk/schedule?date=2012-09-29': '/2012/talk/schedule@date=2012-09-29.html',
};

if (map[path]) {
  window.location.href = map[path];
}
