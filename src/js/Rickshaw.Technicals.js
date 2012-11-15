Rickshaw.namespace('Rickshaw.Technicals');

// Momentum is the absolute difference m = d(today) - d(n days ago)
Rickshaw.Technicals.Momentum = Rickshaw.Class.create(Rickshaw.Technicals, {
	name : "momentum",
	independent : true,
	fields : [{
		name : "period",
		id : "p",
		type : "int",
		curve_sel : true
	}], 
	calc : function(args) {
		var period = this.period = args.period['p'];
		var datum = this.datum = args.datum;
		var res_arr = [];
		var length = datum.length;
		for(var ele = 0; ele<length; ele++){
			if(ele < period)
				res_arr.push({ x: datum[ele].x, y0: datum[ele].y0, y: null });
			else
				res_arr.push({ x: datum[ele].x, y0: datum[ele].y0, y: datum[ele].y - datum[ele-period].y });
		}
		return {
			'momentum' : res_arr
		};
	}
});

// Simple moving average
Rickshaw.Technicals.SMA = Rickshaw.Class.create(Rickshaw.Technicals, {
	independent : false,
	name : "simple moving average",
	fields : [{
		name : "period",
		id : "p",
		type : "int",
		curve_sel : true
	}], 
	calc : function(args) {
		var period = this.period = args.period['p'];
		var datum = this.datum = args.datum;
		var nums = [];
		var res_arr = [];
		var length = datum.length;
	
		// Is there enough data?
		if(datum.length < period)
			throw new Error("Data lenght must me at least the size of the period.");	

		for(var ele = 0; ele<length; ele++){
			var sum=0, num_nulls=0;
			
			// get elements on to the work arr
			nums.push(datum[ele].y);

			// is it too soon?
			if(ele < period-1){
				res_arr.push({ x: datum[ele].x, y0: datum[ele].y0, y: null });
				continue;
			}
			
			// the work arr length has reached the period and needs to be trimed
			if (nums.length > period)
				nums.splice(0,1);  // remove the first element of the array
			
			// loop through and look for nulls as well as add up a sum
			for (var i in nums){
				if(nums[i] == null)
				 	num_nulls++;
				sum += nums[i];
			}

			// return a null if there are any nulls in the work array
			if(num_nulls > 0){
				res_arr.push({ x: datum[ele].x, y0: datum[ele].y0, y: null });
				continue;
			}

			// Something went wrong, calc is broken
			if(isNaN(sum/period))
				throw new Error("Something is wrong, the calc returned NaN");	
			
			// All good, return the calc already!
			res_arr.push({ x: datum[ele].x, y0: datum[ele].y0, y: sum/period });
		}
		return {
			'sma' : res_arr
		};
	}
});

// Fast stochastic oscillator is a momentum indicator that uses support and resistance levels
// %K = 100((curr - L)/(H-L))
// %D = 3-day SMA of %K
Rickshaw.Technicals.FStochastic = Rickshaw.Class.create(Rickshaw.Technicals, {
	name : "fast stochastic",
	independent : true,
	fields : [{
			name : "%K period",
			id : "%k",
			type : "int",
			curve_sel : true
		},
		{
			name : "%D period",
			id: "%d",
			type : "int",
			curve_sel : false
		}
	],
	calc : function(args){
		var period = this.period = args.period;
		var datum = this.datum = args.datum;
		var nums = [];
		var res_arr = [];
		var length = datum.length;
		var period_high, period_low;

		// Is there enough data?
		if(datum.length < period)
			throw new Error("Data lenght must me at least the size of the period.");	
		
		for(var ele = 0; ele<length; ele++){
			var sum=0, num_nulls=0, curr_obj = datum[ele];

			// get elements on to the work arr
			nums.push(curr_obj.y);

			// is it too soon?
			if(ele < period['%k']-1){
				res_arr.push({ x: curr_obj.x, y0: curr_obj.y0, y: null });
				continue;
			}
			
			// the work arr length has reached the period and needs to be trimed
			if (nums.length > period)
				nums.splice(0,1);  // remove the first element of the array
			
			for (var i in nums){
				if(typeof period_high === "undefined" || nums[i] > period_high) period_high = nums[i]; 
				if(typeof period_low === "undefined" || nums[i] < period_low) period_low = nums[i];
			}

			// the calc
			var k = 100*(curr_obj.y - period_low)/(period_high - period_low);
			
			// Something went wrong, calc is broken
			if(isNaN(k))
				throw new Error("Something is wrong, the calc returned NaN");	
			
			// throw it on the array
			res_arr.push({ x: curr_obj.x, y0: curr_obj.y0, y: k });
		}
		var sma_period = [];
		sma_period['p'] = period['%d'];
		return {
			'%k' : res_arr,
			'%d' : new Rickshaw.Technicals.SMA().calc({
				datum: res_arr, 
				period: sma_period
			})['sma']
		};
	}
});
