function myEach(collection, callback){
    if (collection === null || collection === undefined) {
        throw new TypeError('myReduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);
    
    copyOfCollection.forEach(element => callback(element))

    return collection
}

function myMap(collection, callback){

    let modifiedCollection = []

    if (collection === null || collection === undefined) {
        throw new TypeError('myReduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);
    copyOfCollection.forEach(element => modifiedCollection.push(callback(element)))

    return modifiedCollection
}

function myReduce(collection, callback, initialValue) {
    if (collection === null || collection === undefined) {
        throw new TypeError('myReduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let keys = Array.isArray(collection) ? collection : Object.values(collection);
    let value, startIndex;

    if (initialValue !== undefined) {
        value = initialValue;
        startIndex = 0;
    } else {
        if (keys.length === 0) {
            throw new TypeError('Reduce of empty collection with no initial value');
        }
        value = keys[0];
        startIndex = 1; // start from the second item
    }

    for (let i = startIndex; i < keys.length; i++) {
        value = callback(value, keys[i], collection);
    }

    return value;
}

function myFind(collection, predicate){
    if (collection === null || collection === undefined) {
        throw new TypeError('myReduce called on null or undefined');
    }
    if (typeof predicate !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);

    for(let i = 0; i < copyOfCollection.length; i++){

        /*
            Since predicate can contain any number of parameters, 
            we can pass the collection as a parameter to it to increase our 
            flexibility and information to the predicate function.

            This allows the predicate function to potentially make decisions based 
            not just on the current value but the entire collection
        */
        if(predicate(copyOfCollection[i], copyOfCollection)){
            return copyOfCollection[i]
        }
    }
}

function myFilter(collection, predicate){
    if (collection === null || collection === undefined) {
        throw new TypeError('myFilter called on null or undefined');
    }
    if (typeof predicate !== 'function') {
        throw new TypeError(predicate + ' is not a function');
    }

    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let filteredArray = []

    for(let i = 0; i < copyOfCollection.length; i++){
        if(predicate(copyOfCollection[i], copyOfCollection)){
            filteredArray.push(copyOfCollection[i])
        }
    }

    return filteredArray
}

function mySize(collection){
    if (collection === null || collection === undefined) {
        throw new TypeError('mySize called on null or undefined');
    }
 
    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);
    return copyOfCollection.length
}

//Array Functions
function myFirst(collection, returnedElements = 1){
    if (collection === null || collection === undefined) {
        throw new TypeError('myFirst called on null or undefined');
    }

    if(typeof returnedElements !== 'number'){
        throw new TypeError('returnedElements must be a number')
    }
 
    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);
    
    if(returnedElements === 1){return copyOfCollection[0]}
    return copyOfCollection.slice(0, returnedElements)

}

function myLast(collection, returnedElements = 1){
    if (collection === null || collection === undefined) {
        throw new TypeError('myLast called on null or undefined');
    }

    if(typeof returnedElements !== 'number'){
        throw new TypeError('returnedElements must be a number')
    }
 
    let copyOfCollection = Array.isArray(collection) ? collection : Object.values(collection);
    
    if(returnedElements === 1){return copyOfCollection[copyOfCollection.length-1]}
    return copyOfCollection.slice(copyOfCollection.length - returnedElements)

}

function mySortBy(array, callback) {
    // Copy the original array to return a new array
    let sortedArray = [...array];

    // Use the native sort with a custom compare function
    sortedArray.sort((a, b) => {
        // Get transformed values using the callback
        let aValue = callback(a);
        let bValue = callback(b);

        // Compare the transformed values
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });

    return sortedArray;
}

function myFlatten(array, shallow=false, newArr=[]) {
    for(let i = 0; i < array.length; i++) {
        // Check if the current element is an array
        if(Array.isArray(array[i])) {
            // If shallow is true, then add the array as it is, else recursively flatten it
            if(shallow) {
                newArr.push(...array[i]);
            } else {
                myFlatten(array[i], shallow, newArr);
            }
        } else {
            // If the current element is not an array, simply push it to the newArr
            newArr.push(array[i]);
        }
    }
    return newArr;
}

//Object Functions

function myKeys(obj){
    if(typeof obj !== 'object'){
        throw new TypeError(`${obj} needs to be an object`)
    }

    if(!Array.isArray(obj)){
        return Object.keys(obj)
    }
}

function myValues(obj){
    if(typeof obj !== 'object'){
        throw new TypeError(`${obj} needs to be an object`)
    }

    if(!Array.isArray(obj)){
        return Object.values(obj)
    }
}

let myObj = {a: 1, b: 2, c:3}
let myArr = [4,5,6,7]
