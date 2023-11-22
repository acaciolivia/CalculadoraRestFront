angular.module('calculadoraApp', [])
  .controller('CalculadoraController', function($http) {
    var vm = this;

    vm.resultado = 0;
    vm.num1 = 0;
    vm.num2 = 0;

    vm.somar = function() {
      $http.post('http://localhost:8080/api/calculadora/somar', { num1: vm.num1, num2: vm.num2 })
        .then(function(response) {
          vm.resultado = response.data;
        })
        .catch(function(error) {
          console.error('Erro ao calcular a soma:', error);
        });
    };

    vm.subtrair = function() {
      // Lógica para subtrair
    };

    vm.multiplicar = function() {
      // Lógica para multiplicar
    };

    vm.dividir = function() {
      // Lógica para dividir
    };
  });
