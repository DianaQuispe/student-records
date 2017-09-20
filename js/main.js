
 function Person(name,techPoints,lifePoints,status ) {
    this.name = undefined;
    this.techPoints = undefined;
    this.lifePoints = undefined;
    this.status = 'active';
    
}
var students = [];

$('#add').click(function() {
    var name = prompt('Student Name:', 'Name');
    var techPoints = prompt('Tech Points:');
    var lifePoints = prompt('Life Points');
    
    students.push({
        'name' : name,
        'techPoints' : techPoints,
        'lifePoints' : lifePoints,
        'status' : 'active',
    })
    console.log(students);
})
$('#print').click(function(){
    var arrayo = students.map(function(x){
        return x;
    })
    $('#student').append(`<div class="students"><h1><b>STUDENT:</b></h1><br><p><b>Name:</b>${students[0].name }</p><p><b>Tech Points</b>:${students[0].techPoints }</p><p><b>Life Points:</b>${students[0].lifePoints }</p><p><b>Status:</b>${students[0].status }</p></div>`)
    
})
// var person = new Person(names, techPoints, lifePoints, status);
// console.log(person);



// var click = document.getElementById('add');

//  click.addEventListener('click', add());
//  function add() {
    

// $('#student')
