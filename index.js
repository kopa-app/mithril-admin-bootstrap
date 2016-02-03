'use strict';

var m = require('mithril');

module.exports = function () {
  return function (app) {
    // dashboard
    app.components.pages.dashboard.theme.navListClass = '.nav.nav-stacked';

    // list pages
    app.components.pages.list.theme.dashboardButtonClass = '.btn.btn-default';
    app.components.pages.list.theme.createButtonClass = '.btn.btn-success';

    // lists
    app.components.list.theme.class = '.table.table-striped';
    app.components.listItem.theme.actionClass = '.btn.btn-default';
    var actionsView = app.components.listItem.views.actions;
    app.components.listItem.views.actions = function () {
      return m('.btn-group', actionsView.apply(null, arguments));
    };

    var filtersView = app.components.listFilters.view;
    app.components.listFilters.view = function () {
      return m('.panel.panel-default.m-admin-list-filters-wrapper', m('.panel-body', filtersView.apply(null, arguments)));
    };
    app.components.listFilters.theme.fieldsClass = '.form-inline';
    app.components.listFilters.theme.fieldClass = '.form-group';
    app.components.listFilters.theme.sortClass = '.form-inline';
    app.components.listFilters.theme.sortByInputClass = '.form-control';
    app.components.listFilters.theme.sortDirInputClass = '.form-control';
    app.components.listFilters.theme.applyButtonClass = '.btn.btn-primary';

    // show resource
    app.components.show.theme.backButtonClass = '.btn.btn-default';
    app.components.show.theme.listButtonClass = '.btn.btn-default';
    app.components.show.theme.editButtonClass = '.btn.btn-primary';

    // edit resource
    app.components.edit.theme.backButtonClass = '.btn.btn-default';
    app.components.edit.theme.listButtonClass = '.btn.btn-default';

    // pagination
    var pagination = app.components.pagination;
    pagination.views.items = function (scope, context, opts) {
      function itemView(item) {
        return m('li', item);
      }
      return m('ul.pagination', [
        pagination.views.back(scope, context, opts),
        pagination.views.current(scope, context, opts),
        pagination.views.next(scope, context, opts)
      ].map(itemView));
    };
    pagination.views.back = function (scope, context, opts) {
      return m('a', {
        href: 'javascript:;',
        onclick: scope.toPrevPage
      }, m('span', m.trust('&laquo;')));
    };
    pagination.views.next = function (scope, context, opts) {
      return m('a', {
        href: 'javascript:;',
        onclick: scope.toNextPage
      }, m('span', m.trust('&raquo;')));
    }

    pagination.theme.backButtonClass = '.btn.btn-default';
    pagination.theme.nextButtonClass = '.btn.btn-default';

    // remove buttons
    app.components.removeButton.theme.class = '.btn.btn-danger';

    // fields
    var fields = app.components.fields;

    fields.group.theme.class = '.panel-body'
    fields.group.theme.fieldClass = '.form-group.row';
    fields.group.theme.toggleButtonClass = '.btn.btn-default.btn-sm';

    var groupView = fields.group.view;
    fields.group.view = function () {
      return m('.container.panel.panel-default', groupView.apply(null, arguments));
    };

    var inputView = fields.group.views.fieldInput;
    fields.group.views.fieldInput = function () {
      return m('.col-sm-10', inputView.apply(null, arguments));
    };

    fields.relation.theme.toggleButtonClass = '.btn.btn-default.btn-sm';

    fields.resource.theme.formClass = '.form-horizontal';
    fields.resource.theme.saveButtonClass = '.btn.btn-primary';
    fields.resource.theme.editButtonClass = '.btn.btn-primary';

    fields.label.theme.class = '.col-sm-2.control-label';

    Object.keys(fields).forEach(function (name) {
      var field = fields[name];
      if (field.theme && typeof field.theme.inputClass !== 'undefined') {
        field.theme.inputClass = '.form-control';
      }
    });

    fields.datetime.theme.class = '.form-inline';
    fields.datetime.theme.dateInputClass = '.form-control';
    fields.datetime.theme.hoursInputClass = '.form-control';
    fields.datetime.theme.minutesInputClass = '.form-control';
    fields.datetime.theme.secondsInputClass = '.form-control';

    fields.image.theme.previewImageClass = '.img-responsive.img-thumbnail';
  };
};
