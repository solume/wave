// Single source of truth for site navigation.
// Pages contain <nav class="site-nav" data-site-nav> with static fallback links
// (kept for crawlers without JS); this script replaces them with the canonical
// list below and marks the current page.
(function () {
  var links = [
    { href: "/", label: "Home" },
    { href: "/blog/", label: "Blog" }
  ];

  var nav = document.querySelector("nav[data-site-nav]");
  if (!nav) return;

  var path = location.pathname;
  nav.innerHTML = links
    .map(function (link) {
      var current =
        link.href === "/"
          ? path === "/" || path === "/index.html"
          : path.indexOf(link.href) === 0;
      return (
        '<a href="' + link.href + '"' +
        (current ? ' aria-current="page"' : "") +
        ">" + link.label + "</a>"
      );
    })
    .join("");
})();
