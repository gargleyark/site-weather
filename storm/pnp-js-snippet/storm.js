var target = window // if element then should be absolute or relative and preferably overflow hidden
var rainPerSecond = 10
var rainFallSpeed = 2 // 2 seconds from top to bottom
var windStrength = 80 // 0 to infinity
var minThunderPerMinute = 12

var position = target === window ? 'fixed' : 'absolute'
var rainTime = parseInt(1000 / rainPerSecond)
var $target = $(target)
var $body = $('body')
var width = $target.width() - 5
var css = [
  '.raindrop {',
    '-webkit-animation-timing-function: linear;',
    'animation-timing-function: linear;',
    'transition: top ' + rainFallSpeed + 's, margin-left ' + rainFallSpeed + 's, opacity 0.5s;',
    'top: -10%;',
    'margin-left: 0px;',
    'color: blue;',
    'position: ' + position + ';',
    'zIndex: 1000;',
    'font-size: 16px',
  '}',
  '.raindrop.rain {',
    'margin-left: ' + windStrength + 'px;',
    'transform: rotate(' + (windStrength % 360 / 10) + 'deg);',
  '}',
  '.raindrop.rain-fall {',
    'top: 120%;',
  '}',
  'body {',
    'opacity: 1;',
    'transition: opacity 0.3s;',
  '}',
  'body.thunder {',
    'opacity: 0;',
  '}'
].join('')

setInterval(function () {
    var left = Math.random() * 100
    var newDiv = div = $('<div class="raindrop">\\</div>').css({
      left: left + '%'
    }).appendTo('body')
    setTimeout(function() {
      newDiv.remove()
    }, rainFallSpeed * 1000)
    setTimeout(function() {
      newDiv.addClass('rain-fall rain')
    }, 100)
}, rainTime)

addCSS(css)
makeThunder()

function addCSS (cssCode) {
  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssCode;
  } else {
    styleElement.appendChild(document.createTextNode(cssCode));
  }
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function makeThunder () {
  setTimeout(function () {
    $body.addClass('thunder')
    setTimeout(function () {
      $body.removeClass('thunder')
    }, 300)
    makeThunder()
  }, (Math.random() * (60000 / minThunderPerMinute)) + 600)
}
