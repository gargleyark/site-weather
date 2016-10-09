var $target = $(window)
var width = $target.width() - 5

setInterval(function() {
    var left = Math.random() * 100
    var newDiv = div = $('<div class="snowflake">*</div>').css({
      left: left + '%'
    }).appendTo('body')
    setTimeout(function() {
      newDiv.remove()
    }, 10000)
    setTimeout(function() {
      newDiv.addClass('snow-fall snow-' + parseInt(Math.random() * 10))
    }, 100)
}, 150)
