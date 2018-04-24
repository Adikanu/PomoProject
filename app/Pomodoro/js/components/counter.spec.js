describe('counter',function () {
    let $componentController, controller;

    beforeEach(module('myApp'));

    beforeEach(inject(function($injector){
        $componentController = $injector.get('$componentController');
        controller = $componentController('counter', { $scope: {} });
    }));


    it('should have an initial minutes equal 25',function () {
        expect(controller.minutes).toEqual(25);
    });

    it('should have initial seconds equal to 0',function () {
        expect(controller.seconds).toEqual(0);
    });

});