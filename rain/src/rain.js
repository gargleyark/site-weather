var $target = $(window)
var width = $target.width() - 5

setInterval(function() {
    var left = Math.random() * 100
    var newDiv = div = $('<div class="raindrop">\\</div>').css({
      left: left + '%'
    }).appendTo('body')
    setTimeout(function() {
      newDiv.remove()
    }, 2000)
    setTimeout(function() {
      newDiv.addClass('rain-fall rain')
    }, 100)
}, 100)
