var pokemon = angular.module("pokemon",[])

pokemon.controller("ListadoPokemon",function($scope,$rooScope,$http){
	$scope.Pokebola = [];
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/55"
	}).then(function success(x){
		$scoope.pokebola.push(x);
	})
})
