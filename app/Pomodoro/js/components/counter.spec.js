describe('counter',function () {
    var  $componentController, controller;

    beforeEach(module('myApp'));

    beforeEach(inject(function($injector){
        $componentController = $injector.get('$componentController');
        controller = $componentController('counter', { $scope: {} });
    }));

    it('should have an initial started is false',function () {
        expect(controller.started).toBe(false);
    });

    it('should have an initial minutes equal 25',function () {
        expect(controller.minutes).toEqual(25);
    });

    it('should have initial seconds equal to 0',function () {
        expect(controller.seconds).toEqual(0);
    });

    it('should reset the value of minutes to 25',function () {
         controller.stopTimer();

         expect(controller.minutes).toEqual(25);
    });

    it('should reset the value of minutes to 5',function () {
        controller.startShortBreak();

        expect(controller.minutes).toEqual(5);
    });

});