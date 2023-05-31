const currentUrl = new URL(window.location.href);
const path = currentUrl.pathname + currentUrl.search;

const map = {
  '/2014/talk/input?lt=1':                '/2014/talk/input@lt=1.html',
  '/2014/talk/list.html?status=rejected': '/2014/talk/list@status=rejected.html',
  '/2014/talk/schedule?date=2014-08-28':  '/2014/talk/schedule@date=2014-08-28.html',
  '/2014/talk/schedule?date=2014-08-29':  '/2014/talk/schedule@date=2014-08-29.html',
  '/2014/talk/schedule?date=2014-08-30':  '/2014/talk/schedule@date=2014-08-30.html',
  '/2014/talk/schedule?format=mobile':    '/2014/talk/schedule@format=mobile.html',
};

if (map[path]) {
  window.location.href = map[path];
}
