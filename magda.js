(function() {

  var counter = 0,
    $items = document .querySelectorAll('.content figure'),
    numItems = $items.length;

  for (var i = 0; i < numItems; i++) {
    $(".pagelist").append($("<span>").text(i+1));
  }

  var showCurrent = function() {
    var itemToShow = Math.abs(counter % numItems);

    [].forEach.call($items, function(el) {
      el.classList.remove('show');
    });

    $items[itemToShow].classList.add('show');
  };

  document.querySelector('.next').addEventListener('click', function() {
    counter++;
    showCurrent();
  }, false);

  document.querySelector('.prev').addEventListener('click', function() {
    counter--;
    showCurrent();
  }, false);

})();
