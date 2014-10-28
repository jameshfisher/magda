(function($) {
  $(document).ready(function () {

    var currentPageIndex = 0;
    var $items = document.querySelectorAll('.content img');
    var numItems = $items.length;

    var goToPageIndex = function(i) {
      currentPageIndex = i;

      var itemToShow = Math.abs(currentPageIndex % numItems);

      [].forEach.call($items, function(el) {
        el.classList.remove('show');
      });

      $items[itemToShow].classList.add('show');
    };

    for (var i = 0; i < numItems; i++) {
      $(".pagelist").append(
        $("<a>").text(i+1).attr("href", "#").on("click", function() {
          goToPageIndex(parseInt($(this).text())-1);
          return false;
        }));
    }

    document.querySelector('.next').addEventListener('click', function() {
      goToPageIndex(currentPageIndex+1);
    }, false);

    document.querySelector('.prev').addEventListener('click', function() {
      goToPageIndex(currentPageIndex+1);
    }, false);

  });
})(jQuery);
