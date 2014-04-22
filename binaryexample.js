//Copyright 2009 Nicholas C. Zakas. All rights reserved.
//MIT-Licensed, see source file
//Modified by Alexander Kindzerske
function binarySearch(array, query){

    var startIndex  = 0,
        stopIndex   = array.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    array = array.sort();

    while(array[middle] != query && startIndex < stopIndex){

        //adjust search area
        if (query < array[middle]){
            stopIndex = middle - 1;
        } else if (query > array[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right query
    return (array[middle] != query) ? -1 : middle;
}