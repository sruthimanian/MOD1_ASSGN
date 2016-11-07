(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];



function LunchCheckController($scope)
{
		$scope.list="";
	    $scope.message="";
		$scope.check=function()
		{
		$scope.message="";
			var count=0;
		    var items=$scope.list.split(",");
			for( var i=0; i<items.length;i++)
			{
				if(items[i].length!=0)
				{
					count=count+1;
				}
			}
		
		if(count==0)
			$scope.message="Please enter data first";
		else if(count<=3 && count !=0)
		{
			$scope.message= "Enjoy!!";
			
		}
		else
		{
			$scope.message= "Too much!";
			
		}
		
		};

}
	
})();


