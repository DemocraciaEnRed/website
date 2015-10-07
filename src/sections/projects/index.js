var dom = require('dominus')

function reset () {
  dom('.project-card').removeClass('expanded')
}

var cards = dom('.project-card .expand')
cards.on('click', function () {
  reset()
  dom(this).parents('.project-card').addClass('expanded')
})

var closeButtons = dom('.description-overlay button.close')
closeButtons.on('click', function () {
  reset()
})

