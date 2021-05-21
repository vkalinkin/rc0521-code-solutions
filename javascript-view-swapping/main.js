var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
var $tabContainer = document.querySelector('.tab-container');

function clickCheck(event) {
  var currentEvent = event.target;
  if (currentEvent.matches('.tab')) {
    // console.log('match');
    // console.log('$tab', $tab);
    // console.log('current event:', currentEvent);
    // console.log('tab container:', $tabContainer);
    for (var a = 0; a < $tab.length; a++) {
      // console.log('loop');
      // console.log($tab[a]);
      if (currentEvent === $tab[a]) {
        // console.log('inner:',$tab[a]);
        // var currentClassName = $tab[a].className;
        // $tab[a].className = currentClassName + " active";
        $tab[a].className = 'tab active';
        var activeIndex = a;
        // console.log('tabs:', $tab);
        for (var b = 0; b < $tab.length; b++) {
          if (b !== activeIndex) {
            $tab[b].className = 'tab';
          }
        }
      }
    }

    var dataView = currentEvent.getAttribute('data-view');
    // console.log('dataView', dataView)
    for (var c = 0; c < $view.length; c++) {
      if (dataView === $view[c].getAttribute('data-view')) {
        $view[c].className = 'view';
        var activeView = c;
      }
      for (var d = 0; d < $view.length; d++) {
        if (d !== activeView) {
          $view[d].className = 'view hidden';
        }
      }
    }
  }
}

$tabContainer.addEventListener('click', clickCheck);
