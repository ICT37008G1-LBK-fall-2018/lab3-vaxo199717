var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
isEqual(arr1, arr2);

var arrObj1 = [1, 2, {
	a: 1,
	b: 2,
	c: 3
}, 4, 5];
var arrObj2 = [1, 2, {
	c: 3,
	b: 2,
	a: 1
}, 4, 5];
isEqual(arrObj1, arrObj2);

var arr1 = [1, 2, 3, 4, 5];
var arr3 = [5, 4, 3, 2, 1];
isEqual(arr1, arr3);
