var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Pokebola = [];
	for(var M = 1; M <=500;M++){

	
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/" + M
	}).then(function success(x){
		$scope.Pokebola.push(x);
	})
}	
})

 /*01000001 01101110 01100100 01111001 00100000 01111000 01101001 01100011 01101111 01101110 */