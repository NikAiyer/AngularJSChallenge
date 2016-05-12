	describe("Inside Controller", function() {
		beforeEach(module('myApp'));

		var InsideController, scope;

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			InsideController = $controller('InsideController', {
				$scope: scope
			});
		}));
		it('says Inside Controller', function () {
			expect(scope.inside).toEqual("Inside Controller");
		});

	});


    describe("mycontrollertest", function () {

        var myScope;
        var $httpBackend = null;

        beforeEach(function () {
            module('myApp');
        });

        beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
            myScope = $rootScope.$new();
           	httpBackend = $httpBackend;
            $controller('myController', {
	    	    $scope: myScope});
		    }));

        beforeEach(inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Test load json data.title", function () {
            $httpBackend.expectGET('listingsDataBlob.json').respond({
                "title": "VCR",
                "price": 200,
                "username": "boogie"
            });
            myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.data.title).toEqual("VCR");
        });

        it("Test load json data.price", function () {
            $httpBackend.expectGET('listingsDataBlob.json').respond({
                "title": "MP3",
                "price": 40,
                "username": "ricky"
            });
            myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.data.price).toEqual(40);
        });

        it("Test load json data.user.username", function () {
            $httpBackend.expectGET('listingsDataBlob.json').respond({
                "title": "XBOX",
                "price": 400,
                "username": "marcus"
            });
            myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.data.username).toEqual("marcus");
        });

    });
