$(document).ready(function () {
  // Imports
  var _ = window._;

  // Tabs naviagte.
  $('.nav li a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // Handle save button.
  $('button').click(function (e) {
    e.preventDefault();
    var groups = ['Prerolls', 'Midrolls', 'Postrolls'];
    var params = ['active', 'damage', 'number'];
    var data = {
      Prerolls: {},
      Midrolls: {},
      Postrolls: {}
    };

    // Get all data.
    _.each(groups, function (group) {
      _.each(params, function (param) {
        var input = $('#' + group + '_' + param);

        switch (input.attr('type')) {
          case 'number':
            data[group][param] = $(input).val() || $(input).attr('placeholder');
            break;
          case 'checkbox':
            data[group][param] = $(input).get(0).checked;
            break;
        }
      });
    });

    $.post('/save', data);
  });
});
