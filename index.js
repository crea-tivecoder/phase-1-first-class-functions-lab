// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'No'];
console.log(returnFirstTwoDrivers(drivers));

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};


//returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier
const createFareMultiplier = function(multiplier){
    return function (fare) {
        return fare * multiplier;
    };
};

//fareDoubler
const fareDoubler = createFareMultiplier (2)

//fareTripler
const fareTripler = createFareMultiplier (3)

//selectDifferentDrivers
function selectDifferentDrivers(arrayOfDrivers, func){
    if (typeof func ==='function') {
        return func (arrayOfDrivers);

    } else {
        throw new Error ('Second argument must be a function');
    }
}
