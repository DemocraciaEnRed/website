$(function () {
  $(document).on('click', '.proposal[id]', function (evt) {
    window.location.hash = $(evt.currentTarget).attr('id')
  })
})
