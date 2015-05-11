define(["knockout", "text!./schedule.html"], function(ko, scheduleTemplate) {

    var ActivityModel = function(duration, activity){
        var self = this;
        self.duration = ko.observable(duration);
        self.activity = ko.observable(activity);
        self.time = ko.computed(function() {
            //Actually looking to sum the previous durations and the start time to get this start time, but need to reference the parent list for this.
            return this.duration    
        }, this);
    };

    var ScheduleViewModel = function(route) {
        var self = this;
        this.days = ['M', 'T', 'W', 'TH', 'F', 'SA', 'SU'];
        this.currentDay = 'M';
        this.dayStart = new Date(0, 0, 0, 7, 30, 0, 0);
        this.formatDate = function(date) {
            return date.getHours() + ':' + date.getMinutes();
        };
        this.items = ko.observableArray([
            new ActivityModel('7:30 am', 'Wake up'),
            new ActivityModel('8:00 am', 'Central Park'),
            new ActivityModel('9:00 am', 'Breakfast'),
            new ActivityModel('9:30 am', 'Program'),
            new ActivityModel('11:00 am', 'Commute'),
            new ActivityModel('11:30 am', 'Lunch'),
            new ActivityModel('12:00 pm', 'Program'),
            new ActivityModel('3:30 pm', 'Walk daisy'),
            new ActivityModel('4:00 pm', 'Program'),
            new ActivityModel('7:30 pm', 'Dinner'),
            new ActivityModel('8:00 pm', 'Program'),
            new ActivityModel('9:00 pm', 'Commute'),
            new ActivityModel('9:30 pm', 'Program'),
            new ActivityModel('11:00 pm', 'Read'),
            new ActivityModel('11:30 pm', 'Sleep'),
            ]);

        this.newItem = function() {
            return new ActivityModel("", "");
        };
        this.itemToAdd = ko.observable(this.newItem());

        this.addItem = function(item) {
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

    ScheduleViewModel.prototype.doSomething = function() {
        this.message('You invoked doSomething() on the viewmodel.');
    };

    return { viewModel: ScheduleViewModel, template: scheduleTemplate };

});
