var Issue = function () {

  var initForm = function () {
    $select_copy = $('#issue_copy_id').selectize({
      valueField: 'id',
      labelField: 'name',
      searchField: ['code', 'name'],
      create: false,
      render: { option: Selectizer.renderOptions },
      remoteUrl: '/copies/select.json',
      load: Selectizer.loadOptions
    });
    $select_copy[0].selectize.focus();

    $('#issue_member_id').selectize({
      valueField: 'id',
      labelField: 'name',
      searchField: ['code', 'name'],
      create: false,
      render: { option: Selectizer.renderOptions },
      remoteUrl: '/members/select.json',
      load: Selectizer.loadOptions
    });
  };

  return {
    index: function () {},

    new: function () {
      initForm();
    },

    create: function () {
      initForm();
    },

    edit: function () {
      initForm();
    },

    update: function () {
      initForm();
    },

    show: function () {},

    init: function () {
    }
  };

}();
