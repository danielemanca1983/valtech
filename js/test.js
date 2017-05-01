var sidebar = $("main aside");
var main = $("main article");
var sidebarIsClosed = false;
$("#sidebar").click(function(e) {
  e.preventDefault();
  sidebarIsClosed = !sidebarIsClosed;
  if (sidebarIsClosed) {
    sidebar.toggleClass("sidebar-closed");
    setTimeout(function () {
      main.toggleClass("full-width");
    }, 300);
  } else {
    main.toggleClass("full-width");
    setTimeout(function () {
      sidebar.toggleClass("sidebar-closed");
    }, 300);
  }
});
