Function.prototype.bind = function (context) {

	// This is a function prototype method, so the context
	// is the function that .bind was was called off of.
	var originalFn = this;

	// Get the "arguments" to this function (after the context)
	// as an array
	// Read http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
	var originalArgs = [].slice.call(arguments, 1);

	// .bind returns a new function that calls the original function
	// with a forced context and default arguments. This is that function.
	return function () {

		// Just like before, but with the arguments of the call of the
		// bound function. If the original function is add, the bound
		// function would be add2 = add.bind(null, 2)
		// newArgs is the arguments to the add2(2) call.
		var newArgs = [].slice.call(arguments);

		// A combination of the originalArgs after context to the bind function
		// and the new args to the bound function.
		// originalArgs and newArgs are both just normal arrays.
		var fullArgs = originalArgs.concat(newArgs);

		// We invoke the original function (the context of the bind call)
		// with .apply. .apply allows a forced context for the function call
		// as the first argument.

		// The second argument to .apply is an array of arguments for the function
		// being invoked. In this case, it will be the combination of our default
		// arguments (originalArgs) and bound function arguments (newArgs) in the
		// form of fullArgs.
		return originalFn.apply(context, fullArgs);

	};

};