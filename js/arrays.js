function declareArrays() {
    // massivlerin elan edilmesi;
    let mass1 = new Array();

    console.log('mass1= ' + mass1);

    // massivlerin elan edilmesi;
    let mass2;

    mass2 = new Array();

    console.log('mass2= ' + mass2);

    // massivlerin elan edilmesi;
    let mass3;

    mass3 = [];

    console.log('mass3= ' + mass3);
}

function inputValuesToArray() {
    // let mass1 = new Array(1,2.5,-3,'Soz');

    // // document.getElementById('result1').innerHTML=mass1;
    // // console.log('mass1= ' + [mass1]);
    // console.log('mass1:');
    // console.log(mass1);

    // let mass2 = new Array();
    // mass2[0]="soz";
    // mass2[1]="Code Academy";
    // mass2[2]=23;

    // console.log('mass2:');
    // console.log(mass2);

    let mass3 = new Array();
    mass3.push("soz");
    mass3.push("Code Academy");
    mass3.push(23);

    console.log('mass3:');
    console.log(mass3);
}

function concatInArray() {

    let mass3 = new Array();
    mass3.push("soz");
    mass3.push("Code Academy");
    mass3.push(23);

    let mas2 = [1, 2, -11];
    let mas4 = ["I", "T"];
    let mass1 = mas2.concat(mass3)
        .concat(mas4);
    // let mass1=mass3+','+mas2;

    console.log('mass1:');
    console.log(mass1, typeof mass1);
    console.log('join of all elements', mass1.join('-'));
}

function reverseInArray() {
    let mass = new Array(1, 2, 3);
    console.log(mass);
    let massReverse = mass.reverse();
    console.log(massReverse);
}

function deleteAndReplaceInArray() {
    let mass = new Array(1, 2, 30);
    console.log(mass);
    delete mass[1];
    mass[0] = 10;
    mass[2] = mass[2] * -1;
    mass[3] = 20;
    mass.push('yeter');
    console.log(mass);
}

function popFunctionInArray() {
    let mass = new Array(1, 2, 30);
    console.log(mass);
    var lastItem = mass.pop();
    console.log('Excluded from array: ', lastItem);
    console.log(mass);
}

function shiftFunctionInArray() {
    let mass = new Array(1, 2, 30);
    console.log(mass);
    var lastItem = mass.shift();
    console.log('Excluded from array: ', lastItem);
    console.log(mass);
}


function unShiftFunctionInArray() {
    let mass = new Array(1, 2, 30);
    console.log(mass);
    var lastItem = mass.unshift(5);
    console.log('Excluded from array: ', lastItem);
    console.log(mass);
}


function spliceFunctionInArray() {
    let mass = new Array(1, 2, 30);
    console.log(mass);
    // var lastItem=mass.splice(1,2);
    var lastItem = mass.splice(2);
    console.log('Excluded from array: ', lastItem);
    console.log(mass);
}

function filterFunctionInArray() {
    let mass = new Array(1, 2, 30, 11, 23, 434, 7656, 34, 634, 53, 345);
    console.log(mass);
    // var lastItem=mass.splice(1,2);
    var filteredItems = mass.filter(function (current, index, arr) {
        // console.log(arr);
        console.warn('Index: ', index);
        console.warn('Current: ', current);
        console.warn('Array: ', arr);
        console.warn('Current With Index: ', arr[index]);
        console.warn('------------------------------');
        return current > 11;
    });
    console.log('Excluded from array: ', filteredItems);
    console.log(filteredItems);
    console.log(mass);
}