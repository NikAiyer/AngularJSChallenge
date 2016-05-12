	describe("Inside Controller", function() {
		beforeEach(angular.mock.module('myApp'));

		var InsideController, scope;

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			InsideController = $controller('SimpleController', {
				$scope: scope
			});
		}));
		it('says Inside Controller', function () {
			expect(scope).toBeDefined();
			expect(scope.inside).toBeDefined();
			expect(scope.inside).toEqual("Inside Controller");
		});

	});


    describe("mycontrollertest", function () {

        var myScope;
        var $httpBackend = null;
        var getUrl = "../listingsDataBlob.json"
        beforeEach(function () {
            module('myApp');
        });

        beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
            myScope = $rootScope.$new();
           	httpBackend = $httpBackend;
            $controller('SimpleController', {
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
            //myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.myData.title).toEqual("VCR");
        });

        it("Test load json data.price", function () {
            $httpBackend.expectGET('listingsDataBlob.json').respond({
                "title": "MP3",
                "price": 40,
                "username": "ricky"
            });
            //myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.myData.price).toEqual(40);
        });

        it("Test load json data.user.username", function () {
            $httpBackend.expectGET('listingsDataBlob.json').respond({
                "title": "XBOX",
                "price": 400,
                "username": "marcus"
            });
            //myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.myData.username).toEqual("marcus");
        });

    });
