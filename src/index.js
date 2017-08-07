import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import greet from './greet';

console.log('webpack testing...');

angular.module('app', [])
.controller('HomeController', HomeController);

function HomeController(){
  console.log('inside home controller')
  var vm = this;
  this.message = 'testing angular........'
}
