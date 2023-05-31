const currentUrl = new URL(window.location.href);
const path = currentUrl.pathname + currentUrl.search;

if (currentUrl.search === '?lang=en') {
  const newPath = currentUrl.pathname.replace('.html', '');
  const newHref = newPath + '@lang=en.html';
  window.location.href = newHref;
}
