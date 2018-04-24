describe('MainController', function () {
    beforeEach(module('myApp'));

    let $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

});