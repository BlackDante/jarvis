$(document).ready(function () {
  console.log('dsdadadsa');
  $('a').click(function (e) {
    console.log('dsdadadsa2');
    e.preventDefault();
    $(this).tab('show');
  });
});
