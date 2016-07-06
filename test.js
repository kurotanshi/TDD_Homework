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
      new app.Product({ id:  1, cost:  1, revenue: 11, sellPrice: 21 }),
      new app.Product({ id:  2, cost:  2, revenue: 12, sellPrice: 22 }),
      new app.Product({ id:  3, cost:  3, revenue: 13, sellPrice: 23 }),
      new app.Product({ id:  4, cost:  4, revenue: 14, sellPrice: 24 }),
      new app.Product({ id:  5, cost:  5, revenue: 15, sellPrice: 25 }),
      new app.Product({ id:  6, cost:  6, revenue: 16, sellPrice: 26 }),
      new app.Product({ id:  7, cost:  7, revenue: 17, sellPrice: 27 }),
      new app.Product({ id:  8, cost:  8, revenue: 18, sellPrice: 28 }),
      new app.Product({ id:  9, cost:  9, revenue: 19, sellPrice: 29 }),
      new app.Product({ id: 10, cost: 10, revenue: 20, sellPrice: 30 }),
      new app.Product({ id: 11, cost: 11, revenue: 21, sellPrice: 31 })
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