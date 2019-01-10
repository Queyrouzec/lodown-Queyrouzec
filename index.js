'use strict';

// YOU KNOW WHAT TO DO //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection. It can use three parameters:
 *      first: the element in the array or object being passed through
 *      second: the index or key of that element
 *      third: the collection itself
 */
// function each(collection, action) {
//     if(Array.isArray(collection)) {
//         for(var i = 0; i < collection.length; i++) {
//             action(collection[i], i, collection);
//         }
//     } else {
//         for (var key in collection) {
//             action(collection[key], key, collection);
//         }
//     }
// }
// module.exports.each = each;


/** return value put in its one parameter
 * @param {any value} val: any value.
 * Useage:
 *      identity(12); // returns 12
 */
let identity = a => a;


/**Checks the type of the value and returns the type as a string. It can be any of the following:
 * @Param {any value} val: any value
 * @Return:
 *      "string"
 *      "number"
 *      "boolean"
 *      "null"
 *      "undefined"
 *      "array"
 *      "object"
 *      "function"
 * Usage:
 *      typeOf(10); // returns "number"
 *      typeOf("Lmao, jk jk") // returns "string"
 *      typeOf(true) // returns "boolean"
 *      typeOf(x => x) // returns "function"
 */
let typeOf = val => {
    // test and return values types that could be considered objects
    if (val === null) return "null";
    if (val === undefined) return "undefined";
    if (Array.isArray(val)) return 'array';
    // test and return the rest of the value types
    return typeof val;
};


/**Grabs a set of values from the start of an array and returns them. Has two
 * @param {array} array: the array you are grabing the values from.
 * @param {num} num: the amount of values you are grabbing.
 * @Outside cases:
 *      If there is no array or something other than an array is put in its place it'll return
 *          an empty array.
 *      If there is no number or the number is not given it returns the first value in the array
 *      If given a number that is greater than the array length, it returns the whole array.
 * Usage:
 *      first([1,2,3,4,5], 3) // returns [1,2,3];
 *      first(["hi", "hello", "how are you"], 2) // returns ["hi", "hello"]
 */
let first = (array, num) => {
    // makes a new array to avoid altering the given one.
    var arr = array.slice(0);
    // returns an empty array if "arr" is not an array
    if (!Array.isArray(arr) || num < 0) return [];
    // returns the first element in the array if "num" is not a number or not given
    if (num === undefined || typeof num !== 'number') return arr[0];
    // returns the number of items equal to "num"
    return arr.slice(0, num);
    
};

 
/** Grabs a specified amount of the last values in an array and returns them as an array.
 *  @Param {array} arr: holds the array being passed
 *  @Param {number} num: holds the amount of values being grabbed from the end of the array
 *  @Outside cases:
 *      If there is no array or something other than an array is put in its place it'll return
 *          an empty array.
 *      If there is no number or the number is not given it returns the last value in the array
 *      If given a number that is greater than the array length, it returns the whole array.
 *  Useage:
 *      last([1,2,3,4,5], 3) // returns [3,4,5];
 *      last(["hi", "hello", "how are you"], 2) // returns ["hello", "how are you"]
 */
 let last = (arr, num) => {
    // return empty array if "arr" is not an array or if "num" is negative
    if (!Array.isArray(arr) || num < 0) return [];
    // return the last element in "arr" if "num" is undefined or not a number
    if (num === undefined || typeof num !== "number") return arr[arr.length - 1];
    // return full array if "num" > "arr" length
    if (num > arr.length) return arr;
    // return the number of elements equal to "num" from the end of "arr"
    return arr.slice(arr.length - num);
};


/** Gets the first index of a value in an array and returns it. If there is no value in the array, it returns a -1
 *  @Param {array} arr: holds the array being checked. 
 *  @Param {any value} val: holds the value being searched for.
 *	@Return {number}: returns the first index number of the element being passed through.
 *	Useage:
 *		indexOf([1,2,3,4,5,6,7,8], 4) // returns 3
 *		indexOf(["Hi", "Hello", "Howdy", "Wazzup", "How yah doin'"], "Howdy") // returns 2
 *		indexOf(["Hi", "Hello", "Howdy", "Wazzup", "How yah doin'"], "Hi, How are you") // returns -1
 */
let indexOf = (arr, val) => {
    
    // return the index of "val" in "arr"
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    // return -1 if "val" is not in "arr"
    return -1;
	
};


/** Test to see if an array contains a value.
 *  @Param {array} arr: Array to be searched
 *	@Param {any value} val: Value to be searched out in the array.
 * 	@Return {boolean}: returns weitehr or not "val" is in "arr"
 *	Usage:
 *		indexOf([1,2,3,4,5,6,7,8], 4) // returns true
 *		indexOf(["Hi", "Hello", "Howdy", "Wazzup", "How yah doin'"], "Howdy") // returns true
 *		indexOf(["Hi", "Hello", "Howdy", "Wazzup", "How yah doin'"], "Hi, How are you") // returns false
 *
 */
let contains = (arr, val) => {
    // test "arr" to see if it contains "val"
    for(var i of arr) {
        if (val === i) return true;
    }
    return false;
};


/** Runs a function over each value in an array or object. Can produce side-effects.
 *  @Param {Object/Array} coll: holds the object or array being tested.
 *  @Param {function} func: the function being used on every value.
 *		@FirstParam {any value}: holds the element in the array or values in an object
 *		@SecondParam {array: index number, object: key}: holds the index number for an array or key for an object.
 *		@ThirdParam {object/array}: holds "coll";
 *      @Return: return is specified by the function and can be almost anything.
 *	@Return: Undefined
 *	Usage:
 *      let array1 = [2,3,4,5,6]
 *      let object1 = {a: 2, b: 3, c: 4}
 *		each(array1, (element, index, array) => array[index] = element*2) // array1 -> [4,6,8,10,12]
 *      each(object1, (value, key, object) => object[key] = value*2) // object1 -> {a: 4, b: 6, c: 8}
 *      each(array1, (element, index, array) => array.push(element)) // array1 -> [2,3,4,5,6,2,3,4,5,6]
 */
let each = (coll, func) => { 
    // if "coll" is an array run "func" with three args for each element of "coll": "coll", the index of "coll", and the element of that index
    if(Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i, coll);
        }
        return;
    }
    // if "coll" is equal to object then cycle through "coll"'s keys and run func with the "coll"'s values, keys, and "coll"
    if(typeof coll === 'object') {
        for (var i in coll) {
            func(coll[i], i, coll);
        }
    }
    
};


/** Returns a new array with no copies.
 *  @Param {array} array: The array being reduced.
 *	@Return {array}: returns a new array reduced array.
 *  Useage:
 *		unique([1,3,2,5,5,6,3,4,2]) // returns: [1,3,2,5,6,4]
 *		unique(["Bark", "Bark", "Bark", "Pant", "Whimper"]) // returns: ["Bark", "Pant", "Whimper"]
 */
 let unique = array => {  
    // makes a new array to avoid side effecets 
    var arr = array.slice(0);
    // cycles through array, only iterating when it does not delete a value
    for (var i = 0; i < arr.length;) { 
        // deletes a value if it is not the first value in the array
        if (i !== indexOf(arr, arr[i])) arr.splice(i, 1);
        else i++;
    }
    return arr;
};


/** Returns a new array with only the values that passed a test.
 *	@Param {array} array: array being checked.
 * 	@Param {function} func: function being run on every element in the array
 *		@FirstParam {any value}: element being tested in "array"
 *		@SecondParam {number}: index value of element being tested
 *		@ThridParam {array}: a copy of the array being tested.
 *      @Return {boolean}: True adds the value to a new array, false ignores it.
 *	@Return {array}: passed values.
 *  Usage:
 *      let array1 = [1,2,3,4,5,6,7,8];
 *      filter(array1, (elemnent, index, array) => !(element % 2)) // returns [2,4,6,8];
 *      let array2 = [true, "hi", 3, 6, null]
 *      // test if second array has an element in frist array.
 *      filter(array2, (element2, index2, arrayTwo) => {
 *          // loops through second array
 *          return each(array1, (element1, index1, arrayOne) => {
 *              // test if second array has an element in frist array.
 *              if(element1 === element2) return true;
 *          });
 *      });
 *      // returns [3, 6]
 */
let filter = (array, func) => { 
    
    // holds array to avoid side effects
    var arr = [];
    // cycles through every element in "array" and adds them to "arr" if they pass the "func" test
    each(array, function(ele, ind) {
                                        if(func(ele, ind, array)) arr.push(array[ind]);
                                      });
    return arr;
    
};


/** Returns an array with all values that fail a test
 *	@Param {array} array: array being checked.
 * 	@Param {function} func: function being run on every element in the array
 *		@FirstParam {any value}: element being tested in "array"
 *		@SecondParam {number}: index value of element being tested
 *		@ThridParam {array}: a copy of the array being tested.
 *      @Return {boolean}: false adds the value to a new array, true ignores it.
 *	@Return {array}: failed values.
 *  Usage:
 *      let array1 = [1,2,3,4,5,6,7,8];
 *      reject(array1, (elemnent, index, array) => !(element % 2)) // returns [1,3,5,7];
 *      let array2 = [true, "hi", 3, 6, null]
 *      // test if second array has an element in frist array.
 *      reject(array2, (element2, index2, arrayTwo) => {
 *          // loops through second array
 *          return each(array1, (element1, index1, arrayOne) => {
 *              // test if second array has an element in frist array.
 *              if(element1 === element2) return true;
 *          });
 *      });
 *      // returns [true, "hi", null]
 *      
 */
let reject = (arr, func) => { 

    // inverses the function passed through "filster" to accept the oppisite of the test function
    return filter(arr, function(e,i) {return !func(e,i,arr)});

};


/** Returns two arrays with values that passed a test and values that failed a test.
 *	@Param {array} array: array being checked.
 * 	@Param {function} func: function being run on every element in the array.
 *		@FirstParam {any value}: element being tested in "array".
 *		@SecondParam {number}: index value of element being tested.
 *		@ThridParam {array}: a copy of the array being tested.
 *      @Return {boolean}: True adds the value to the first array, false adds it to the second.
 *	@Return {array}: returns two arrays inside of an array. The first is all passed test and the second is all failed test.
 *  Usage:
 *      let array1 = [1,2,3,4,5,6,7,8];
 *      partition(array1, (elemnent, index, array) => !(element % 2)) // returns [[2,4,6,8], [1,3,5,7]];
 *      let array2 = [true, "hi", 3, 6, null]
 *      // test if second array has an element in frist array.
 *      partition(array2, (element2, index2, arrayTwo) => {
 *          // loops through second array
 *          return each(array1, (element1, index1, arrayOne) => {
 *              // test if second array has an element in frist array.
 *              if(element1 === element2) return true;
 *          });
 *      });
 *      // returns [[3, 6], [true, "hi", null]]
 */
let partition = (arr, func) => { 
    
    // returns "filter" results, then "reject" results
    return [filter(arr, func), reject(arr, func)];
    
};


/** Runs a function on an array/object and returns a new array/object
 *  @Param {Object/Array} coll: holds the object or array being tested.
 *  @Param {function} func: the function being used on every value.
 *		@FirstParam {any value}: holds the element in the array or values in an object
 *		@SecondParam {array: index number, object: key}: holds the index number for an array or key for an object.
 *		@ThirdParam {object/array}: holds "coll"
 *      @Return {any value}: the return statment can be any value that can be added to the new array or object.
 *	@Return {array/object}: returns the altered array or object
 *  Usage:
 *      let array1 = [2,3,4,5,6]
 *      let object1 = {a: 2, b: 3, c: 4}
 *		each(array1, (element, index, array) => array[index] = element*2) // returns [4,6,8,10,12]
 *      each(object1, (value, key, object) => object[key] = value*2) // returns {a: 4, b: 6, c: 8}
 *      each(array1, (element, index, array) => array.push(element)) // returns [2,3,4,5,6,2,3,4,5,6]
 */
let map = (coll, func) => {
    
    // makes a new array called "newColl" to be returned at the end of the program
    var newColl = [];
    if(Array.isArray(coll)) {
        // runs each with "func" through "newColl";
        each(coll, (e, i, a) => newColl[i] = func(e,i,a));
    } else {
        var obj = {};
        each(coll, (e, i, a) => obj[i] = func(e,i,a));
        for (var i in obj) newColl.push(obj[i]);
    }
    // run "newColl" through each and return it
    return newColl;
    
};


/** Grabs the value of a property from an array of objects.
 *  @Param {array} arr: the array from which the objects are pulled
 *	@Param {prop} prop: the property being searched for
 *	@Return {array}: holds an array of the values associated with the properties
 *  Usage:
 *      let array1 = [{a: 1, b:2}, {c: 3, b: 4}, {d: 5, e: 6}];
 *      pluck(array1, "b"); // returns [2, 4];
 *      let array2 = [{name: "Joe Smo", hairColor: "black"}, {name: "Johnny", hairColor: "brown"}, {name: "Purple People Eater", hairColor: "purple"}]
 *      pluck(array2, "harColor") // returns ["black", "brown", "purple"]
 */
let pluck = (arr, prop) => { 
    
    var retArr = [];
    // pushes all objects with prop to the return array
    map(arr, (e,i,a) => {
        if(e.hasOwnProperty(prop)) retArr.push(e[prop]);
    });
    return retArr;
    
};


/** Checks to see if every element in an object/array passes a test.
 *	@Param {array/object} coll: the collection being tested.
 *	@Param {function} func: function being used on each element
 *		@FirstParam {any value}: holds the element in the array or values in an object
 *		@SecondParam {array: index number, object: key}: holds the index number for an array or key for an object.
 *		@ThirdParam {object/array}: holds "coll"
 *      @Return {boolean}: returns weither or not the test was passed.
 *  @Return {boolean}: returns weither or not every element passed the test.
 *  Usage:
 *      let array1 = [2,4,6,8,10];
 *      let object1 = {a: 3, b: 6, c: 9, d: 12, e: 15}
 *      every(array1, (element, index, array) => (element % 2 === 0)) // returns true;
 *      every(array1, (element, index, array) => (element % 4 === 0)) // returns false;
 *      every(object1, (value, key, object) => (value % 3 === 0)) // returns true;
 *      every(object1, (value, key, object) => (value % 6 === 0)) // returns false;
 */
let every = (coll, func) => { 
    
    // holds end result
    var bool = true;
    // if there is no function test to see if the double bang of the elements of "coll" are true. If one isn't returns false.
    if(func === undefined) {
        each(coll, (e,i,a) => {
            if(!e === true) bool = false;
        });
    // runs to see if any element in "coll" when put through "func", returns false. if so returns false 
    } else each(coll, (e,i,a) => {
        if (!func(e,i,a)) bool = false;
    });
    return bool;
    
};


/** Returns true if one value in an array/object returns true
 *  @Param {array/object} coll: the object or array being tested
 *  @Param {function} func: the function being used on each value
 *		@FirstParam {any value}: holds the element in the array or values in an object
 *		@SecondParam {array: index number, object: key}: holds the index number for an array or key for an object.
 *		@ThirdParam {object/array}: holds "coll"
 *      @Return {boolean}: returns weither or not the test was passed.
 *  @Return {boolean}: returns weither or any element passed the test.
 *  Usage:
 *      let array1 = [2,4,6,8,10];
 *      let object1 = {a: 3, b: 6, c: 9, d: 12, e: 15}
 *      every(array1, (element, index, array) => (element % 4 === 0)) // returns true ;
 *      every(array1, (element, index, array) => (element % 7 === 0)) // returns false;
 *      every(object1, (value, key, object) => (value % 6 === 0)) // returns true;
 *      every(object1, (value, key, object) => (value % 8 === 0)) // returns false;
 */
let some = (coll, func) => { 
    // test to see if "func" exist then returns true if any element's boolean value is true
    if(func === undefined) {
        return !every(map(coll, (e,i,a) => a[i] = !e));
    }
    // test if any element in coll passes the test.
    return !every(coll, (e,i,a) => !func(e,i,a));
};


/** brings an array down to one element using an incramentor
 *  @Param {array} arr: the array being effected
 *  @Param {function} func: the function being used on the array's elements.
 *		@FirstParam {any value}: holds the seed to be iterated
 *		@SecondParam {any value}: holds the element of the array
 *		@ThirdParam {number}: holds the index number
 *      @Return {any value}: returns the new "seed" value.
 *  @Param {any value} seed: the optional input that is used as the starting value for the function.
 *  @Return {any value} seed: returns the fully edited seed.
 *  @Outside cases:
 *      If seed is not given then sets seed as the first value in the array and starts its loop on the second value in the array.
 *  Usage:
 *      let array1 = [2, 3, 5, 9];
 *      reduce(arr, (seed, element, index) => seed + element, 1); // returns 20
 *      reduce(arr, (seed, element, index) => seed + element); // returns 19
 */
let reduce = (arr, func, seed) => {
    // holds counter
    var i = 0;
    // if seed is undefined sets seed to first element of array and incraments counter
    if (seed === undefined) {
        seed = arr[0];
        i++;
    }
    // sets results of "func" to "seed" for every element of "arr"
    while(i < arr.length) {
        seed = func(seed, arr[i], i);
        i++;
    }
    return seed;
};


/** combinds all arguments into the first argument.
 *  @Param {object} obj1: the object recieving the values of all following objects
 *  @Param {array} obj2: an array of all following arguments which are objects who's key/value pairs are being added to "obj1"
 *  @Return {object} obj1: returns the newly constructed "obj1"
 *  Usage:
 *      let object1 = {a: 1, b: 2};
 *      let object2 = {c: 3, b: 4};
 *      let object3 = {d: 5, e: 6};
 *      extend(object1, object2, object3) // object1 -> {a: 1, b: 4, c: 3, d: 5, e: 6}
 *                                        // returns {a: 1, b: 4, c: 3, d: 5, e: 6}
 */
let extend = (obj1, ...obj2) => { //////////////////////////////////////////////////////////////////////////////////////////
    // cycles through all elements after "obj[0]" and adds them to "obj[0]"
    for (var i of obj2) {
        for (var j in i) obj1[j] = (i[j]);
    }
    return obj1;
};