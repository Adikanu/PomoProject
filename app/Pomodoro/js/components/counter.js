/**
 * Below (commented out) are other supported
 * properties of the .component() method
 *
 * Remember: bindings: {} is a wrapper
 * for bindToController and scope: {}
 * so you never access $scope directly.
 * "$ctrl" is the default controllerAs name.
 */
var counter = {
	// templateUrl
	// controllerAs
	// transclude: true,
	// require: {
	//	 parent: '^^parent'
	// },
	bindings: {
        minutes: '='
	},
	controller: ['$interval',function (interval) {

	    var self = this;

	    self.started  = false;

	    self.minutes = 25;

	    self.seconds = 0;


        //function called every time you need to reset initial values of min,sec
		self.resetVariables = function (mins, secs ,started) {
            self.minutes = mins;
            self.seconds = secs;
            self.started = started;
        };

		//function for starting pomodoro clock
        self.startWork = function() {
           self.resetVariables(25,0,true);
        };


        //function for starting short break
		self.startShortBreak = function () {
            self.resetVariables(5 ,0 , true);
        };

		//function for starting long break
		self.startLongBreak = function () {
            self.resetVariables(15,0, true);
        };

		//function for stopping and reseting the clock to initial value
		self.stopTimer = function () {
            self.resetVariables(25, 0 ,false);
        };


		self.timerComplete = function () {
           self.started = false;
        };


        //function tell the remaining time after every button press
            self.intervalCallback = function () {
                if (!self.started) return;
                if (self.seconds == 0) {
                    if (self.minutes == 0) {
                        alert("Time Over");
                        self.timerComplete();
                        return;
                    }
                    self.seconds = 59;
                    self.minutes--;
                } else {
                    self.seconds--;
                }
            };



        self.toDoubleDigit = function(num){
            return num < 10 ? '0' + parseInt(num,10) : num;
        };


        //first method called when component is intialized
        self.$onInit = function(){
            self.interval = interval(self.intervalCallback, 1000);
        };

	}],
	template: `
        
        <div id="timer">
          <div id="time">
             <span>{{$ctrl.toDoubleDigit($ctrl.minutes)}}</span>
             <span>:</span>
             <span>{{$ctrl.toDoubleDigit($ctrl.seconds)}}</span>
         </div>
         <div id="filler" ng-style="{height : $ctrl.fillerHeight + 'px'}"></div>
         </div>
        
		<div id="buttons">
			<button id="work" type="button" ng-click="$ctrl.startWork();">Start</button>
			<button id="shortBreak" type="button" ng-click="$ctrl.startShortBreak();">Short Break</button>
			<button id="longBreak" type="button" ng-click="$ctrl.startLongBreak();">Long Break</button>
			<button id="stop" type="button" ng-click="$ctrl.stopTimer();">Reset</button>
		</div>
	`
};

myAppModule.
    component('counter', counter);
