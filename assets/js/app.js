
var cl = console.log;

// for each method

// HOF (Higher Order Function) >> a fun which accepts another fun as a argument or parameter

// Callback function >> a fun which is passed as a argument or parameter

// main is hof and add is a callback function

function main(add, x,y){
	add(x,y);
}
function add(x,y){
	return x + y;
}
add(10,20);

var ages = [25,30,48,50,69,78,13,54,85];

// 1. my age is 10
// 2. my age is 20

// for(var i=0; i < ages.length;i++){
	// cl('${i+1} My age is ${ages[i]}');
// }

ages.forEach(function(age){
	cl(age);
})

// ages.forEach(function(age, i){
	// cl(' ${i+1} My age is ${age}');
// })

// Ex.1) ======================================


var subjects = ["math","physics","chemistry","som","tom","english","marathi"];


subjects.forEach(function(subject){
	cl(subject);
})

// Ex.2) ======================================

var marks = [85,62,70,89,92,75,67,95,64];

marks.forEach(function(mark){
	cl(mark);
})

// Ex.3) ======================================

var sports = ["cricket","table tennis","hockey","basketball","kabaddi","holyball","khokho"];

sports.forEach(function(sport){
	cl(sport);
})

// Ex.4) ======================================

var nos = [54,23,10,0,78,28,61,43,51,79,60];

nos.forEach(function(no){
	cl(no)
})

// Ex.5) ======================================

var nums = [5,20,43,86,75,12,40,30,15,24,65,85,0,42];

nums.forEach(function(num){
	if(num%2 !== 0){
		cl(num);
	}
})

// Ex.6) ======================================

var languages = ["html","css","javascript","angular","typescript","sql","python","c++"];

languages.forEach(function(lan){
	cl(lan);
})

// Ex.7) ======================================

var mobs = ["one plus","oppo","realme","asus","apple","samsung","nokia","infinix","parasonic","intex"];
mobs.forEach(function(mob){
	cl(mob);
})

// Ex.8) ======================================

var years = [1995,2016,2022,1948,1991,2012,2003,1997,2011,2000];

years.forEach(function(yrs){
	cl(yrs);
})


// Ex.9) ======================================

// printing values mul of 5

var values = [5,25,45,35,30,85,10,40,75,60,95,20];

values.forEach(function(val){
	cl(val);
});

// Ex.10) ======================================

var sqnos = [4,16,25,169,256,9,225,81,196,441,36,64,81,100];

sqnos.forEach(function(sqno){
	cl(sqno);
});

// Ex.11) ======================================

var primenos = [2,3,5,7,11,13,17,19,23,61,67,71,83,89,97];

primenos.forEach(function(prime){
	cl(prime);
});

// Ex.12) ======================================

var nos = [20,25,22,12,10,32,40,5,8,60,10];

nos.forEach(function(no){
	if(nos % 2 === 0){
		cl(no);
	}
});


// for each table

//Ex.1) =============================================

var studentinfo = document.getElementById('studentinfo');

var students = [
{
	fname:'Neha',
	lname:'Kadam',
	rollno:'1',
	marks:'80',
	contact:'7123942045'
},
{
	fname:'Vaishali',
	lname:'Mantre',
	rollno:'2',
	marks:'65',
	contact:'8459304217'
},
{
	fname:'Sujal',
	lname:'Shinde',
	rollno:'3',
	marks:'75',
	contact:'9975120364'
},
{
	fname:'Dipali',
	lname:'Deshmukh',
	rollno:'4',
	marks:'70',
	contact:'7284069713'
},
]

var result = '';

students.forEach(function(students, i){
	 result += '<tr><td>'+(i+1)+'</td><td>'+students.fname+'</td><td>'+students.lname+'</td><td>'+students.rollno+'</td><td>'+students.marks+'</td><td>'+students.contact+'</td></tr>';
})

cl(result);
studentinfo.innerHTML = result;

// for(var i=0;i < students.length;i++){
	// result += '<tr><td>'+(i+1)+'</td><td>'+students[i].fname+'</td><td>'+students[i].lname+'</td><td>'+students[i].rollno+'</td><td>'+students[i].marks+'</td><td>'+students[i].contact+'</td></tr>';
// }




//Ex.2) =============================================

var person = document.getElementById('person');

var persons = [
{
	fname:'Ajay',
	lname:'Rathod',
	age:'35',
	salary:'50000',
	contact:'9862147036',
	companyname:'cognizant'
},
{
	fname:'Sangram',
	lname:'Deshmukh',
	age:'31',
	salary:'40000',
	contact:'7216610808',
	companyname:'reliance'
},
{
	fname:'Darshana',
	lname:'Chavhan',
	age:'45',
	salary:'65000',
	contact:'8301497652',
	companyname:'infosys'
},
{
	fname:'Sujata',
	lname:'Kadam',
	age:'24',
	salary:'30000',
	contact:'9821305746',
	companyname:'HCL Tech'
},
]

var result = '';

persons.forEach(function(persons, i){
	result += '<tr><td>'+(i+1)+'</td><td>'+persons.fname+'</td><td>'+persons.lname+'</td><td>'+persons.age+'</td><td>'+persons.salary+'</td><td>'+persons.contact+'</td><td>'+persons.companyname+'</td></tr>'
})

cl(result);
person.innerHTML = result;

// for(var i=0;i < persons.length;i++){
	// result += '<tr><td>'+(i+1)+'</td><td>'+persons[i].fname+'</td><td>'+persons[i].lname+'</td><td>'+persons[i].age+'</td><td>'+persons[i].salary+'</td><td>'+persons[i].contact+'</td><td>'+persons[i].companyname+'</td></tr>'
// }


//Ex.3) =============================================

var data = document.getElementById('data');

var employe = [
{
	fname:'David',
	lname:'John',
	department:'finance',
	place:'pune'
},
{
	fname:'Nagesh',
	lname:'Shinde',
	department:'Marketing',
	place:'Bangalore'
},
{
	fname:'Punam',
	lname:'Kadam',
	department:'IT',
	place:'Hyderabad'
},
{
	fname:'Samuel',
	lname:'Samson',
	department:'Finance',
	place:'Mumbai'
},
{
	fname:'Henry',
	lname:'Smith',
	department:'Marketing',
	place:'Bangalore'
},
]

var result = '';

employe.forEach(function(employe, i){
	result += '<tr><td>'+(i+1)+'</td><td>'+employe.fname+'</td><td>'+employe.lname+'</td><td>'+employe.department+'</td><td>'+employe.place+'</td></tr>';
})

cl(result);
data.innerHTML = result;

// for(var i=0;i < employe.length;i++){
	// result += '<tr><td>'+(i+1)+'</td><td>'+employe[i].fname+'</td><td>'+employe[i].lname+'</td><td>'+employe[i].department+'</td><td>'+employe[i].place+'</td></tr>';
// }

//Ex.4) =============================================


var info1 = document.getElementById('info1');

var student = [
{
	rollno:10,
	fname:'Michel',
	lname:'Smith',
	marathi:80,
	english:70,
	History:85,
	geography:65,
	physics:72,
	math:75	
},
{
	rollno:11,
	fname:'Vijay',
	lname:'Jadhav',
	marathi:72,
	english:80,
	History:62,
	geography:85,
	physics:75,
	math:67	
},
{
	rollno:12,
	fname:'Tony',
	lname:'Doe',
	marathi:60,
	english:77,
	History:88,
	geography:92,
	physics:95,
	math:62
},
{
	rollno:13,
	fname:'Sangram',
	lname:'Deshmukh',
	marathi:75,
	english:85,
	History:65,
	geography:78,
	physics:92,
	math:87	
},
]

var result = '';

student.forEach(function(student, i){
	result += '<tr><td>'+(i+1)+'</td><td>'+student.rollno+'</td><td>'+student.fname+'</td><td>'+student.lname+'</td><td>'+student.marathi+'</td><td>'+student.english+'</td><td>'+student.History+'</td><td>'+student.geography+'</td><td>'+student.physics+'</td><td>'+student.math+'</td></tr>';
})

info1.innerHTML = result;
cl(result);

// for(var i=0;i < student.length;i++){
	
	// result += '<tr><td>'+(i+1)+'</td><td>'+student[i].rollno+'</td><td>'+student[i].fname+'</td><td>'+student[i].lname+'</td><td>'+student[i].marathi+'</td><td>'+student[i].english+'</td><td>'+student[i].History+'</td><td>'+student[i].geography+'</td><td>'+student[i].physics+'</td><td>'+student[i].math+'</td></tr>';
// }




//Ex.5) =============================================

var info2 = document.getElementById('info2');

var persons = [
{
	name:'Anne',
	age:25,
	country:'USA'
},
{
	name:'Steve',
	age:40,
	country:'Australia'
},
{
	name:'Swapnil',
	age:31,
	country:'India'
},
{
	name:'Paul',
	age:57,
	country:'SriLanka'
},
]

var result = '';

persons.forEach(function(persons, i){
	result += '<tr><td>'+(i+1)+'</td><td>'+persons.name+'</td><td>'+persons.age+'</td><td>'+persons.country+'</td></tr>';
})

info2.innerHTML = result;
cl(result);


// for(var i=0;i < persons.length;i++){
	
	// result += '<tr><td>'+(i+1)+'</td><td>'+persons[i].name+'</td><td>'+persons[i].age+'</td><td>'+persons[i].country+'</td></tr>';
// }






