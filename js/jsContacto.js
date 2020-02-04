$(document).ready(function() {

  var page = {
    goingDown: false,
    stopScrolling: false,
    startScrollTimer: null,
    prevScroll: null,
    newScroll: null,
    scrollSpeed: 2,
    scrollInterval: 10
  }

  page.autoScroll = function() {
    if (!page.stopScrolling) {
      if (page.goingDown) {
        window.scrollBy(0, -page.scrollSpeed);
      } else {
        window.scrollBy(0, page.scrollSpeed);
      }
    }
  }

  page.watchScroll = function() {
    var scrollTop = $(window).scrollTop();
    page.autoScroll();
    // Stop automatic scroll when user is scrolling, and change direction if need be.
    // Adding/subtracting an extra 2 pixels for padding to prevent false positive on scroll.
    if (page.prevScroll + 20 < scrollTop || page.prevScroll - 20 > scrollTop) {
      page.stopScrolling = true;
      clearTimeout(page.startScrollTimer);
      page.startScrollTimer = setTimeout(function() {
        page.stopScrolling = false;
      }, 50);
      if (page.prevScroll + 30 < scrollTop) {
        page.goingDown = false;
      }
      if (page.prevScroll - 30 > scrollTop) {
        page.goingDown = true;
      }
    }
    page.prevScroll = scrollTop;
  }

  $(window).on("load", function() {
    // Set scrollTop after 1ms to prevent browser from remembering previous scroll position
    setTimeout(function() {
      setInterval(page.watchScroll, page.scrollInterval);
    }, 4000);
  });

});

$(document).ready(function(){
        $(".backvid").show();
    });