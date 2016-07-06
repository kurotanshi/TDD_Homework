var assert = require('assert');
var mocha  = require('mocha');

var suite  = mocha.suite;
var setup  = mocha.setup;
var test   = mocha.test;

var app = require('./app.js');

// test case
suite('TDD_Homework_01', function(){
  var productList = [];

  // arrange, 準備 productlist
  setup(function(){
    productList = [
      new app.Product(1,  1,  11, 21),
      new app.Product(2,  2,  12, 22),
      new app.Product(3,  3,  13, 23),
      new app.Product(4,  4,  14, 24),
      new app.Product(5,  5,  15, 25),
      new app.Product(6,  6,  16, 26),
      new app.Product(7,  7,  17, 27),
      new app.Product(8,  8,  18, 28),
      new app.Product(9,  9,  19, 29),
      new app.Product(10, 10, 20, 30),
      new app.Product(11, 11, 21, 31)
    ];

  });

  // 測試
  suite('UnitTest1', function(){

    test('Test_Pagesize_is_3_Sum_by_Cost_Should_Be_6_15_24_21', function(){

      // act
      var expected = [6, 15, 24, 21];
      var result = app.getSum(3, productList, 'cost');

      // assert
      assert.deepEqual(expected, result);
    });


    test('Test_Pagesize_is_4_Sum_by_Revenue_Should_Be_50_66_60', function(){

      // act
      var expected = [50, 66, 60];
      var result = app.getSum(4, productList, 'revenue')

      // assert
      assert.deepEqual(expected, result);
    });

  });

});