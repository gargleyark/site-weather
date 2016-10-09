var target = window // if element then should be absolute or relative and preferably overflow hidden
var snowPerSecond = 7
var snowFallSpeed = 10 // 10 seconds from top to bottom

var position = target === window ? 'fixed' : 'absolute'
var snowTime = parseInt(1000 / snowPerSecond)
var $target = $(target)
var width = $target.width() - 5
var css = [
  '.snowflake {',
    'transition: top ' + snowFallSpeed + 's, margin-left ' + snowFallSpeed + 's, opacity 0.5s;',
    'top: -1%;',
    'margin-left: 0px;',
    'color: white;',
    'position: ' + position + ';',
    'zIndex: 1000;',
  '}',
  '.snowflake.snow-0 {',
    'margin-left: 0px;',
  '}',
  '.snowflake.snow-1 {',
    'margin-left: 10px;',
  '}',
  '.snowflake.snow-2 {',
    'margin-left: 20px;',
  '}',
  '.snowflake.snow-3 {',
    'margin-left: 30px;',
  '}',
  '.snowflake.snow-4 {',
    'margin-left: 40px;',
  '}',
  '.snowflake.snow-5 {',
    'margin-left: 50px;',
  '}',
  '.snowflake.snow-6 {',
    'margin-left: 60px;',
  '}',
  '.snowflake.snow-7 {',
    'margin-left: 70px;',
  '}',
  '.snowflake.snow-8 {',
    'margin-left: 80px;',
  '}',
  '.snowflake.snow-9 {',
    'margin-left: 90px;',
  '}',
  '.snowflake.snow-10 {',
    'margin-left: 100px;',
  '}',
  '.snowflake.snow-fall {',
    'top: 100%;',
  '}'
].join('')

setInterval(function() {
    var left = Math.random() * 100
    var newDiv = div = $('<div class="snowflake">*</div>').css({
      left: left + '%'
    }).appendTo('body')
    setTimeout(function() {
      newDiv.remove()
    }, snowFallSpeed * 1000)
    setTimeout(function() {
      newDiv.addClass('snow-fall snow-' + parseInt(Math.random() * 10))
    }, 100)
}, snowTime)

addCSS(css)

function addCSS(cssCode) {
  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssCode;
  } else {
    styleElement.appendChild(document.createTextNode(cssCode));
  }
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}
