var Rickshaw = require('../dist/js/rickshaw'), assert = require('assert');

////////////   UTILS
var sample_data = {
  data : {
	  constant : [ {x: 0, y: 0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 2, y: 2, y0: 0} , { x: 3, y: 3, y0: 0}, { x: 4, y: 4, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 6, y: 6,y0: 0}, { x: 7, y: 7, y0: 0}, { x: 8, y: 8, y0: 0}],
    fib : [ {x: 0, y: 0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 1, y: 1, y0: 0} , { x: 2, y: 2, y0: 0}, { x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 8, y: 8,y0: 0}, { x: 13, y: 13, y0: 0}, { x: 21, y: 21, y0: 0}],
    prime : [ {x: 2, y: 2, y0: 0}, {x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0} , { x: 7, y: 7, y0: 0}, { x: 11, y: 11, y0: 0}, { x: 13, y: 13, y0: 0}, { x: 17, y: 17,y0: 0}, { x: 19, y: 19, y0: 0}, { x: 23, y: 23, y0: 0}],
    rand : [ {x: 60, y: 66.6, y0: 0}, {x: 70, y: 67.1, y0: 0}, { x: 80, y: 70, y0: 0} , { x: 90, y: 71.8, y0: 0}, { x: 100, y: 74.4, y0: 0}, { x: 103, y: 74.8, y0: 0}]
  },
  results : {
    sma : {
      constant : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 2, y: null, y0: 0} , { x: 3, y: 2, y0: 0}, { x: 4, y: 3, y0: 0}, { x: 5, y: 4, y0: 0}, { x: 6, y: 5,y0: 0}, { x: 7, y: 6, y0: 0}, { x: 8, y: 7, y0: 0}],
      fib : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 1, y: null, y0: 0} , { x: 2, y: null, y0: 0}, { x: 3, y: null, y0: 0}, { x: 5, y: 2.4, y0: 0}, { x: 8, y: 3.8,y0: 0}, { x: 13, y: 6.2, y0: 0}, { x: 21, y: 10, y0: 0}],
      prime : [ {x: 2, y: null, y0: 0}, {x: 3, y: null, y0: 0}, { x: 5, y: null, y0: 0} , { x: 7, y: null, y0: 0}, { x: 11, y: null, y0: 0}, { x: 13, y: 7.8, y0: 0}, { x: 17, y: 10.6,y0: 0}, { x: 19, y: 13.4, y0: 0}, { x: 23, y: 16.6, y0: 0}]
    },
    stochastic : {
			k : {
      	constant : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 2, y: 100, y0: 0} , { x: 3, y: 100, y0: 0}, { x: 4, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 6, y: 100,y0: 0}, { x: 7, y: 100, y0: 0}, { x: 8, y: 100, y0: 0}],
      	fib : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 1, y: 100, y0: 0} , { x: 2, y: 100, y0: 0}, { x: 3, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 8, y: 100,y0: 0}, { x: 13, y: 100, y0: 0}, { x: 21, y: 100, y0: 0}],
      	prime : [ {x: 2, y: null, y0: 0}, {x: 3, y: null, y0: 0}, { x: 5, y: 100, y0: 0} , { x: 7, y: 100, y0: 0}, { x: 11, y: 100, y0: 0}, { x: 13, y: 100, y0: 0}, { x: 17, y: 100,y0: 0}, { x: 19, y: 100, y0: 0}, { x: 23, y: 100, y0: 0}]
    	},
			d : {
				constant : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 2, y: null, y0: 0} , { x: 3, y: 100, y0: 0}, { x: 4, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 6, y: 100,y0: 0}, { x: 7, y: 100, y0: 0}, { x: 8, y: 100, y0: 0}],
      	fib : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 1, y: null, y0: 0} , { x: 2, y: 100, y0: 0}, { x: 3, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 8, y: 100,y0: 0}, { x: 13, y: 100, y0: 0}, { x: 21, y: 100, y0: 0}],
      	prime : [ {x: 2, y: null, y0: 0}, {x: 3, y: null, y0: 0}, { x: 5, y: null, y0: 0} , { x: 7, y: 100, y0: 0}, { x: 11, y: 100, y0: 0}, { x: 13, y: 100, y0: 0}, { x: 17, y: 100,y0: 0}, { x: 19, y: 100, y0: 0}, { x: 23, y: 100, y0: 0}]
			}
		},
    linreg : {
      constant : [ {x: 0, y: 0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 2, y: 2, y0: 0} , { x: 3, y: 3, y0: 0}, { x: 4, y: 4, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 6, y: 6,y0: 0}, { x: 7, y: 7, y0: 0}, { x: 8, y: 8, y0: 0}],
      fib : [ {x: 0, y:0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 1, y: 1, y0: 0} , { x: 2, y: 2, y0: 0}, { x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 8, y: 8, y0: 0}, { x: 13, y: 13, y0: 0}, { x: 21, y: 21, y0: 0}],
      prime : [ {x: 2, y: 2, y0: 0}, {x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0} , { x: 7, y: 7, y0: 0}, { x: 11, y: 11, y0: 0}, { x: 13, y: 13, y0: 0}, { x: 17, y: 17,y0: 0}, { x: 19, y: 19, y0: 0}, { x: 23, y: 23, y0: 0}],
      rand : [ {x: 60, y: 65.89729323308275, y0: 0}, {x: 70, y: 67.94737998843264, y0: 0}, { x: 80, y: 69.99746674378255, y0: 0} , { x: 90, y: 72.04755349913245, y0: 0}, { x: 100, y: 74.09764025448234, y0: 0}, { x: 103, y: 74.71266628108732, y0: 0}]
    }
  }
};


////////////   MOMENTUM
function momentum(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.Momentum();
  var data = tech.calc({
    datum: sample_data,
    period: period
	});

  for(var i in data.momentum){
    if(i < period['p']) continue;
	  test.equal(data.momentum[i].y, sample_data.data[data_set][i].y - sample_data.data[data_set][i-period['p']].y, msg);
  }
  test.done();
}

exports.constantMomentum = function(test) {
  var period = new Array();
  period['p'] = 1;
  momentum('constant', period, test, 'constant momentum');
};
exports.fibMomentum = function(test) {
  var period = new Array();
  period['p'] = 2;
  momentum('fib', period, test, 'fib momentum');
};
exports.primeMomentum = function(test) {
  var period = new Array();
  period['p'] = 3;
  momentum('prime', period, test, 'prime momentum');
};


////////////   sma
function sma(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.SMA();
	var results = sample_data.results.sma[data_set];
  var data = tech.calc({
    datum: sample_data.data[data_set],
    period: period
	});
  for(var i in data.sma){
	  test.equal(data.sma[i].y, results[i].y, msg);
  }
  test.done();
}

exports.constantsma = function(test) {
  var period = new Array();
  period['p'] = 3;
  sma('constant', period, test, 'constant sma');
};

exports.fibsma = function(test) {
  var period = new Array();
  period['p'] = 5;
  sma('fib', period, test, 'fib sma');
};

exports.primesma = function(test) {
  var period = new Array();
  period['p'] = 5;
  sma('prime', period, test, 'prime sma');
};



////////////   stochastic
function stochastic(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.FStochastic();
	var results_k = sample_data.results.stochastic.k[data_set];
	var results_d = sample_data.results.stochastic.d[data_set];
  var data = tech.calc({
    datum: sample_data.data[data_set],
    period: period
	});
 	for(var i in data['%k']){
	  test.equal(data['%k'][i].y, results_k[i].y, msg);
  }
	for(var i in data['%d']){
	  test.equal(data['%d'][i].y, results_d[i].y, msg);
  }
	test.done();
}

exports.constantstochastic = function(test) {
  var period = new Array();
	period['%k'] = 3;
	period['%d'] = 2;
  stochastic('constant', period, test, 'constant stochastic');
};

exports.fibstochastic = function(test) {
  var period = new Array();
	period['%k'] = 3;
	period['%d'] = 2;
  stochastic('fib', period, test, 'fib stochastic');
};

exports.primestochastic = function(test) {
  var period = new Array();
	period['%k'] = 3;
	period['%d'] = 2;
  stochastic('prime', period, test, 'prime stochastic');
};

////////////   linear regression
function linreg(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.Linreg();
	var results = sample_data.results.linreg[data_set];
  var data = tech.calc({
    datum: sample_data.data[data_set]
	});
	for(var i in data.linreg){
	  test.equal(data.linreg[i].y, results[i].y, msg);
  }
  test.done();
}

exports.constantlinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('constant', period, test, 'constant linreg');
};

exports.fiblinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('fib', period, test, 'fib linreg');
};
exports.primelinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('prime', period, test, 'prime linreg');
};
exports.randlinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('rand', period, test, 'rand linreg');
};
