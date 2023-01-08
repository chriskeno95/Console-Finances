var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

//step 1 : code to calculate the total number of months in the above data set - as it is an array i need to calculate how many index's there are within the array. I can use array.length to calculate this and save it in a variable
let totalMonths = finances.length;

//step 2 : calculate the net amount of profits/losses over the entire period. To do this i need to create a total variable and create code to add all the number values within the finances array together.
let total = 0 
//first i will define this as zero and allow code to work out its actual value
for (let i = 0; i < finances.length; i++){
    total += finances[i][1]
    //console.log(total);
}
//in the code above, i am using a forloop to go through each of the number values of the array which are in the position of index 1. I am then getting the code to assign the sum off all number values to the total variable that i had previously set to 0.


// below i am creating a variable to track the monthly net values. I am using a forloop to track what each months net amount is. I also need to track what the change is from the month previous. to do this i will create a change variable that will track the change between the current month and the month previous.
let net = 0;
let netArray = [];
let change = 0;
let netChangeTotal = 0;
let leastProfit = ['', 9999999999999];
let greatestProfit = ['', 0];

for (let i = 0; i < finances.length; i++){
    change = finances[i][1] - net;
    net = finances[i][1];
    //console.log(net);
   // console.log(change);
    netArray.push(change);
    //above, i am turning the data from the variable change into an array 


    //step 4: work out the The greatest increase in profits (date and amount) over the entire period and also the greatest decrease in profits.
    if (change > greatestProfit[1]){
        greatestProfit = [finances[i][0], finances[i][1]]
    }

    if (change < leastProfit[1]){
        leastProfit = [finances[i][0], finances[i][1]]
    }
}

// step 3: I want to find the average of the changes in Profit/Losses over the entire period.

 // to do this i need to add up the values of the monthly changes to find what the total change in profits are from month to month and divide this by the total amount of months
for (let i = 0; i < netArray.length; i++){
    netChangeTotal += netArray[i]
}

//below i am storing the average value as a variable and using code to display it at 2 decimal places
let average = Math.round((netChangeTotal / totalMonths)* 100) / 100;

results = `Financial Analysis` + `\n` +
`____________________________` + `\n` + `\n` +
`Total Months: ` + totalMonths + '\n' +
`total: $` + total + `\n` +
`Average change: $` + average + `\n`  +
`Greatest increase of profits: ` + greatestProfit + `\n` +
`Greatest decrease in profits: ` + leastProfit + `\n`;

console.log(results);
