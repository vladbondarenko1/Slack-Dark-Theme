Add to the end 

document.addEventListener('DOMContentLoaded', function () {
  $.ajax({
      url: 'https://raw.githubusercontent.com/vladbondarenko1/Slack-Dark-Theme/master/dark.css',
      success: function (css) {
          $("<style></style>").appendTo('head').html(css);
      }
  });
});
