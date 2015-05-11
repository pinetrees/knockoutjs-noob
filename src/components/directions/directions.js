define(["knockout", "text!./directions.html", "underscore"], function(ko, directionsTemplate, _) {

  var DirectionModel = function(turn, direction, street, distance){
      var self = this;
      self.turn = ko.observable(turn);
      self.direction = ko.observable(direction);
      self.street = ko.observable(street);
      self.distance = ko.observable(distance);
  };

  var DirectionsViewModel = function(route) {
      var self = this;

      this.startLocation = "1021 Pennsylvania Avenue East, Apartment 3, Warren, Pennsylvania";
      this.endLocation = "79 Madison Avenue, New York, New York";
      this.items = ko.observableArray([
          new DirectionModel(null, "SE", "Pennsylvania Avenue East", 1.2),
          new DirectionModel("Left", "E", "US-6", 10.2),
          new DirectionModel("Slight right", "W", "PA-666", 2.4),
          new DirectionModel("Straight", "S", "PA-948", 8.6),
          new DirectionModel("Slight left", "N", "PA-66", 2.6),
          new DirectionModel("Straight", "S", "PA-948", 15.3),
          new DirectionModel("Left", "W", "Main Street", 1.0),
          new DirectionModel(null, "S", "US-219", 11.2),
          new DirectionModel("Left", "S", "PA-153", 16.8),
          new DirectionModel("Left", "E", "I-80", 0.3),
          new DirectionModel(null, "E", "I-80", 253),
          new DirectionModel("Exit 53", "E", "US-46", 4.3),
          new DirectionModel("Ramp", "S", "Garden State Parkway", 0.3),
          new DirectionModel("Left", "E", "NJ-3", 0.3),
          new DirectionModel(null, "E", "NJ-3", 10.3),
          new DirectionModel(null, "E", "NJ-495", 2.8),
          new DirectionModel(null, "E", "NJ-495", 0.8),
          new DirectionModel("36 street exit", "E", "Interstate 495", 0.1),
      ]);

      this.newItem = function() {
          return new DirectionModel(null, "N", "", 0);
      };
      this.itemToAdd = ko.observable(this.newItem());

      this.addItem = function(item) {
          this.items.push(item());
          this.itemToAdd(this.newItem());
      }.bind(this);

      this.removeItem = function(item){
          self.items.remove(item);
          return false;
      };

      this.toggleItem = function() {
          this.checked(!this.checked());
          console.log(this.checked());
      };

      this.totalDistance = ko.computed(function() {
          total_distance = _.reduce( this.items(), function(memo, item) {
              return memo + item.distance();
          }, 0);
          return total_distance.toFixed(2);
      }, this);
  };

  return { viewModel: DirectionsViewModel, template: directionsTemplate };

});
