var dom = require('dominus')

var cards = dom('.project-card .expand')
cards.on('click', function () {
  dom('.project-card').removeClass('expanded')
  dom(this).parents('.project-card').addClass('expanded')
})

var closeButtons = dom('.description-overlay button.close')
closeButtons.on('click', function () {
  dom(this).parents('.project-card').removeClass('expanded')
})