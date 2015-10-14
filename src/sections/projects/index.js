var dom = require('dominus')

function reset () {
  dom('.project-card').removeClass('expanded')
}

var cards = dom('.project-card .expand')
cards.on('click', function () {
  var card = dom(this).parents('.project-card')
  if (card.hasClass('expanded')) {
    reset()
  } else {
    reset()
    card.addClass('expanded')
  }
})

var closeButtons = dom('.description-overlay button.close')
closeButtons.on('click', function () {
  reset()
})
