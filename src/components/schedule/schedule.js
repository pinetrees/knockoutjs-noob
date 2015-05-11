define(["knockout", "text!./schedule.html"], function(ko, scheduleTemplate) {

    var ActivityModel = function(duration, activity, day){
        var self = this;
        self.duration = ko.observable(duration);
        self.activity = ko.observable(activity);
        self.time = ko.computed(function() {
            //Actually looking to sum the previous durations and the start time to get this start time, but need to reference the parent list for this.
            return self.duration();
        }, this);
        self.day = ko.observable(day);
    };

    var ScheduleViewModel = function(route) {
        var self = this;
        this.days = [
            {
                abbr: 'M', 
            },
            {
                abbr: 'T',
            },
            {
                abbr: 'W', 
            },
            {
                abbr: 'TH', 
            },
            {
                abbr: 'F',
            },
            {
                abbr: 'SA',
            },
            {
                abbr: 'SU'
            },
        ];
        this.currentDay = ko.observable("M");
        this.changeDay = function() {
            self.currentDay(this.abbr);
        };
        this.dayStart = new Date(0, 0, 0, 7, 30, 0, 0);
        this.formatDate = function(date) {
            return date.getHours() + ':' + date.getMinutes();
        };
        this.items = ko.observableArray([
            new ActivityModel('7:30 am', 'Wake up', "M"),
            new ActivityModel('8:00 am', 'Central Park', "M"),
            new ActivityModel('9:00 am', 'Breakfast', "M"),
            new ActivityModel('9:30 am', 'Program', "M"),
            new ActivityModel('11:00 am', 'Commute', "M"),
            new ActivityModel('11:30 am', 'Lunch', "M"),
            new ActivityModel('12:00 pm', 'Program', "M"),
            new ActivityModel('3:30 pm', 'Walk daisy', "M"),
            new ActivityModel('4:00 pm', 'Program', "M"),
            new ActivityModel('7:30 pm', 'Dinner', "M"),
            new ActivityModel('8:00 pm', 'Program', "M"),
            new ActivityModel('9:00 pm', 'Commute', "M"),
            new ActivityModel('9:30 pm', 'Program', "M"),
            new ActivityModel('11:00 pm', 'Read', "M"),
            new ActivityModel('11:30 pm', 'Sleep', "M"),

            new ActivityModel('7:30 am', 'Wake up', "T"),
            new ActivityModel('8:00 am', 'Central Park', "T"),
            new ActivityModel('9:00 am', 'Breakfast', "T"),
            new ActivityModel('9:30 am', 'Program', "T"),
            new ActivityModel('11:00 am', 'Commute', "T"),
            new ActivityModel('11:30 am', 'Lunch', "T"),
            new ActivityModel('12:00 pm', 'Program', "T"),
            new ActivityModel('3:30 pm', 'Walk daisy', "T"),
            new ActivityModel('4:00 pm', 'Program', "T"),
            new ActivityModel('7:30 pm', 'Dinner', "T"),
            new ActivityModel('8:00 pm', 'Program', "T"),
            new ActivityModel('9:00 pm', 'Commute', "T"),
            new ActivityModel('9:30 pm', 'Program', "T"),
            new ActivityModel('11:00 pm', 'Read', "T"),
            new ActivityModel('11:30 pm', 'Sleep', "T"),

            new ActivityModel('7:30 am', 'Wake up', "W"),
            new ActivityModel('8:00 am', 'Central Park', "W"),
            new ActivityModel('9:00 am', 'Breakfast', "W"),
            new ActivityModel('9:30 am', 'Program', "W"),
            new ActivityModel('11:00 am', 'Commute', "W"),
            new ActivityModel('11:30 am', 'Lunch', "W"),
            new ActivityModel('12:00 pm', 'Program', "W"),
            new ActivityModel('3:30 pm', 'Walk daisy', "W"),
            new ActivityModel('4:00 pm', 'Program', "W"),
            new ActivityModel('7:30 pm', 'Dinner', "W"),
            new ActivityModel('8:00 pm', 'Program', "W"),
            new ActivityModel('9:00 pm', 'Commute', "W"),
            new ActivityModel('9:30 pm', 'Program', "W"),
            new ActivityModel('11:00 pm', 'Read', "W"),
            new ActivityModel('11:30 pm', 'Sleep', "W"),

            new ActivityModel('7:30 am', 'Wake up', "TH"),
            new ActivityModel('8:00 am', 'Central Park', "TH"),
            new ActivityModel('9:00 am', 'Breakfast', "TH"),
            new ActivityModel('9:30 am', 'Program', "TH"),
            new ActivityModel('11:00 am', 'Commute', "TH"),
            new ActivityModel('11:30 am', 'Lunch', "TH"),
            new ActivityModel('12:00 pm', 'Program', "TH"),
            new ActivityModel('3:30 pm', 'Walk daisy', "TH"),
            new ActivityModel('4:00 pm', 'Program', "TH"),
            new ActivityModel('7:30 pm', 'Dinner', "TH"),
            new ActivityModel('8:00 pm', 'Program', "TH"),
            new ActivityModel('9:00 pm', 'Commute', "TH"),
            new ActivityModel('9:30 pm', 'Program', "TH"),
            new ActivityModel('11:00 pm', 'Read', "TH"),
            new ActivityModel('11:30 pm', 'Sleep', "TH"),

            new ActivityModel('7:30 am', 'Wake up', "F"),
            new ActivityModel('8:00 am', 'Central Park', "F"),
            new ActivityModel('9:00 am', 'Breakfast', "F"),
            new ActivityModel('9:30 am', 'Program', "F"),
            new ActivityModel('11:00 am', 'Commute', "F"),
            new ActivityModel('11:30 am', 'Lunch', "F"),
            new ActivityModel('12:00 pm', 'Program', "F"),
            new ActivityModel('3:30 pm', 'Walk daisy', "F"),
            new ActivityModel('4:00 pm', 'Program', "F"),
            new ActivityModel('7:30 pm', 'Dinner', "F"),
            new ActivityModel('8:00 pm', 'Program', "F"),
            new ActivityModel('9:00 pm', 'Commute', "F"),
            new ActivityModel('9:30 pm', 'Program', "F"),
            new ActivityModel('11:00 pm', 'Read', "F"),
            new ActivityModel('11:30 pm', 'Sleep', "F"),

            new ActivityModel('7:30 am', 'Wake up', "SA"),
            new ActivityModel('8:00 am', 'Central Park', "SA"),
            new ActivityModel('9:00 am', 'Breakfast', "SA"),
            new ActivityModel('9:30 am', 'Program', "SA"),
            new ActivityModel('11:30 am', 'Lunch', "SA"),
            new ActivityModel('12:00 pm', 'Program', "SA"),
            new ActivityModel('3:30 pm', 'Walk daisy', "SA"),
            new ActivityModel('4:00 pm', 'Program', "SA"),
            new ActivityModel('7:30 pm', 'Dinner', "SA"),
            new ActivityModel('8:00 pm', 'Program', "SA"),
            new ActivityModel('11:00 pm', 'Read', "SA"),
            new ActivityModel('11:30 pm', 'Sleep', "SA"),

            new ActivityModel('7:30 am', 'Wake up', "SU"),
            new ActivityModel('8:00 am', 'Central Park', "SU"),
            new ActivityModel('9:00 am', 'Breakfast', "SU"),
            new ActivityModel('9:30 am', 'Program', "SU"),
            new ActivityModel('11:30 am', 'Lunch', "SU"),
            new ActivityModel('12:00 pm', 'Program', "SU"),
            new ActivityModel('3:30 pm', 'Walk daisy', "SU"),
            new ActivityModel('4:00 pm', 'Program', "SU"),
            new ActivityModel('7:30 pm', 'Dinner', "SU"),
            new ActivityModel('8:00 pm', 'Program', "SU"),
            new ActivityModel('9:30 pm', 'Program', "SU"),
            new ActivityModel('11:00 pm', 'Read', "SU"),
            new ActivityModel('11:30 pm', 'Sleep', "SU"),
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
