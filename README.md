# REACTO Bind

Reimplement your own version of Javascript's Function.prototype.bind.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

```javascript

var aboutMe = function () {
	return 'My name is ' + this.name + ' and I hail from ' + this.location;
};

var aboutJoe = aboutMe.bind({ name: 'Joe', location: 'New Jersey' });
aboutJoe(); // 'My name is Joe and I hail from New Jersey'

var aboutYoda = aboutMe.bind({ name: 'Yoda', location: 'Dagobah' });
aboutYoda(); // 'My name is Yoda and I hail from Dagobah'


// -----------


var add = function (x, y) {
	return x + y;
};

var add2 = add.bind(null, 2);

add2(2); // 4
add2(5); // 7
add2(0); // 2

var just5 = add.bind(null, 2, 3);

just5();  // 5
just5(2); // 5
just5(4); // 5

```