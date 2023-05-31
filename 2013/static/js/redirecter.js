const currentUrl = new URL(window.location.href);
const path = currentUrl.pathname + currentUrl.search;

const map = {
  '/2013/talk/schedule?date=2013-09-19': '/2013/talk/schedule@date=2013-09-19.html',
  '/2013/talk/schedule?date=2013-09-20': '/2013/talk/schedule@date=2013-09-20.html',
  '/2013/talk/schedule?date=2013-09-21': '/2013/talk/schedule@date=2013-09-21.html'
};

if (map[path]) {
  window.location.href = map[path];
}
