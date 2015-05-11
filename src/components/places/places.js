define(["knockout", "text!./places.html"], function(ko, placesTemplate) {

  var PlaceModel = function(name, address, visit){
      var self = this;
      self.name = ko.observable(name);
      self.address = ko.observable(address);
      self.visit = ko.observable(visit);
  };

  var PlacesViewModel = function(route) {
      var self = this;
      this.items = ko.observableArray([
          new PlaceModel('Home', "111 West 96th Street", "May 11th, 2015"),
          new PlaceModel('Breakout Commerce', "79 Madison Avenue", "May 11th, 2015"),
          new PlaceModel('Central Park', "Central Park", "May 11th, 2015"),
          new PlaceModel('Columbia University', "116th St & Broadway", "May 15th, 2015"),
      ]);

      this.newItem = function() {
          return new PlaceModel("");
      };
      this.itemToAdd = ko.observable(this.newItem());

      this.addItem = function(item) {
          console.log(item().name());
          this.items.push(item());
          this.itemToAdd(this.newItem());
      }.bind(this);

      this.possiblyAddItem = function(data, event) {
          if( event.keyCode == 13 ) {
              if( this.itemToAdd().name() != undefined && this.itemToAdd().address() != undefined && this.itemToAdd().visit() != undefined ) {
                  this.addItem(this.itemToAdd);
              }
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

  PlacesViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: PlacesViewModel, template: placesTemplate };

});
