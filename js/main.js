
 
 function Person(name,techPoints,lifePoints,status ) {
    this.name = undefined;
    this.techPoints = undefined;
    this.lifePoints = undefined;
    this.status = 'active';
    
}
var students = [];

$('#add').click(function() {
  
    students.push({
        name : prompt('Student Name:', 'Name'),
        techPoints : prompt('Tech Points:',' 70%'),
        lifePoints : prompt('Life Points:','70%'),
        status : 'active',
    })
    console.log(students);
    $('#student').html('');
    $('#student').append(`<div class="addStudents"><h1><b>STUDENT:</b></h1><br><p><b>Name:</b>${students[students.length-1].name }</p><p><b>Tech Points</b>:${students[students.length-1].techPoints }</p><p><b>Life Points:</b>${students[students.length-1].lifePoints }</p><p><b>Status:</b>${students[students.length-1].status }</p></div>`)

})

$('#print').click(function(){
    map();
    function printAll(item) {
        return `<div class="printStudents"><h1><b>STUDENT:</b></h1><br><p><b>Name:</b>${item.name }</p><p><b>Tech Points</b>:${item.techPoints }</p><p><b>Life Points:</b>${item.lifePoints }</p><p><b>Status:</b>${item.status }</p></div>`;
    }
    function map() {
        $('#student').html('');
        $('#student').append(students.map(printAll));
        
    }
})

 $('#update').click(function() {
    // filter();
    // function checkNotes(item) {
    //     var notesFilter = [item.techPoints,item.lifePoints].filter(function(value, label){
    //         return value <= 70;
    //     });
    //     notesFilter.map()
    //     console.log(notesFilter);

    //     return notesFilter;
    //   }
    // function filter() {
    //     $('#student').html('');
    //     $('#student').append(students.filter(checkNotes));
    //     x
    // }
    
}) 
function checkNotes(item) {
    
}