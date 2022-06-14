const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
]; //
/*
1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
*/
console.log("The  question 1 answer is: ")
for (var x in factories) {
    console.log("{name: '" + factories[x].name + "' , count: " + Object.keys(factories[x].employees).length + "}");
}


/*
2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
*/


var str3 = [];

for (var i = 0; i < factories.length; i++) {
    str3.push(factories[i].employees);
}
var myNewArray = [].concat.apply([], str3);

//console.log(myNewArray);

for (var x in str3) {


    var total_count = myNewArray.reduce((obj, item) => {
        if (item in obj) {
            obj[item]++
        } else {
            obj[item] = 1
        }
        return obj
    }, {})


}

console.log("The  question 2 answer is: ")
console.log(total_count)


/*
3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
*/

console.log("The  question 3 answer is: ")
for (var x in factories) {

    console.log("{ name: '" + factories[x].name + "' , employees:[" + factories[x].employees.sort() + "] }");
}






const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
];

const tasks = [
    { id: 1, title: "task01", duration: 60 },
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
];
/*

4. Count total hours worked in 1 day ? // => 39

*/

var all = 0;

function changeTime(option, option1) {
    // currentTime当前时间，假设是 2019-7-2 19:03
    var currentTime = option;
    var reg = new RegExp(":", "g"); //去掉时间里面的-
    var a = currentTime.replace(reg, "");
    var regs = new RegExp("0", "g"); //去掉时间里面的空格
    var b = a.replace(regs, "");
    var currentTime1 = option1;
    var reg1 = new RegExp(":", "g"); //去掉时间里面的-
    var a1 = currentTime1.replace(reg1, "");
    var regs1 = new RegExp("0", "g"); //去掉时间里面的空格
    var b1 = a1.replace(regs1, "");

    all += b1 - b;





}





for (var x in employeeType) {

    if (employeeType[x].work_end == "00:00:00") {
        changeTime(employeeType[x].work_begin, "24:00:00");
    } else {
        changeTime(employeeType[x].work_begin, employeeType[x].work_end);
    }
}
console.log("The  question 4 answer is: " + all + " hours");


/*
5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
*/

/*
6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
*/
var totaltasktime = 0;

function addtasktime(time1) {

    totaltasktime += time1;


}

for (var x in tasks) {
    addtasktime(tasks[x].duration);

}
var needday = Math.round(totaltasktime / 900);

console.log("The  question 6 answer is: " + needday + " days");