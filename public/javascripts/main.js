$(document).ready(function () {
  $('.nav li a').click(function (e) {
    e.preventDefault();
    // var tabID = $(this).attr('href').replace('#/', '');
    // debugger;
    // $('#' + tabID).tab('show');
    $(this).tab('show');
  });
});
