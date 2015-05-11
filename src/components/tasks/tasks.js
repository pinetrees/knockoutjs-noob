define(["knockout", "text!./tasks.html"], function(ko, tasksTemplate) {

  var ItemViewModel = function(id, name, checked){
      var self = this;
      self.id = ko.observable(id);
      self.name = ko.observable(name);
      self.checked = ko.observable(checked);
  };

  var TasksViewModel = function(route) {
      var self = this;
      this.items = ko.observableArray([
          new ItemViewModel(0, 'Cover more KnockoutJS', false),
          new ItemViewModel(1, 'Cancel internet in Warren', false),
          new ItemViewModel(2, 'Go dancing in Central Park', false),
          new ItemViewModel(3, 'Find a programming meetup', false),
      ]);

      this.newItem = function() {
          return new ItemViewModel(this.items.length + 1, "", false);
      };
      this.itemToAdd = ko.observable(this.newItem());

      this.addItem = function(item) {
          console.log(item().name());
          this.items.push(item());
          this.itemToAdd(this.newItem());
      }.bind(this);

      this.possiblyAddItem = function(data, event) {
          if( event.keyCode == 13 ) {
              this.addItem(this.itemToAdd);
          }
          return true;
      };

      this.removeItem = function(item){
          self.items.remove(item);
          return false;
      };

      this.toggleItem = function() {
          this.checked(!this.checked());
          console.log(this.checked());
      };
  };

  TasksViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: TasksViewModel, template: tasksTemplate };

});
