define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function($, ko, router, bootstrap, projections) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('inventory', { require: 'components/inventory/inventory' });
  ko.components.register('directions', { require: 'components/directions/directions' });
  ko.components.register('places', { require: 'components/places/places' });
  ko.components.register('tasks', { require: 'components/tasks/tasks' });
  ko.components.register('schedule', { require: 'components/schedule/schedule' });

  pages = [
    {
        name: 'inventory', 
    },
    {
        name: 'directions', 
    },
    {
        name: 'places', 
    },
    {
        name: 'tasks', 
    },
    {
        name: 'schedule',
    }
  ]

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute, pages: pages, test: "test" });
});
