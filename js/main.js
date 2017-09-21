
 'use strict';
 let students = [];
 function printOne() {
    students.push({
        name : prompt('Student Name:', 'Name'),
        techPoints : prompt('Tech Points:',' 70%'),
        lifePoints : prompt('Life Points:','70%'),
        status : 'active',
    })
    $('#student').empty();  
  $('#student').append(`<div class="addStudents"><h1><b>STUDENT:</b></h1><p><b>Name: </b>${students[students.length-1].name }</p><p><b>Tech Points</b> :${students[students.length-1].techPoints }</p><p><b>Life Points :</b>${students[students.length-1].lifePoints }</p><p><b>Status :</b>${students[students.length-1].status }</p></div>`)
}
function printAll(){
    $('#student').empty();  
    var result = students.map((value)=>{
        return $('#student').append(`<div class="printStudents"><h1><b>STUDENT: </b></h1><p><b>Name: </b>${value.name }</p><p><b>Tech Points</b> :${value.techPoints }</p><p><b>Life Points :</b>${value.lifePoints }</p><p><b>Status :</b>${value.status }</p></div>`);
    } )
}
function checkNotes() {
    var newStudents =students.filter((value)=>{return (parseInt(value.techPoints)+parseInt(value.lifePoints)/2 >= 70) } )
    $('#student').empty();  
    for(var i in newStudents){
       $('#student').append(`<div class="checkStudents"><h1><b>STUDENT: </b></h1><p><b>Name: </b>${newStudents[i].name }</p><p><b>Tech Points</b> :${newStudents[i].techPoints }</p><p><b>Life Points :</b>${newStudents[i].lifePoints }</p><p><b>Status :</b>${newStudents[i].status }</p></div>`);
   }
   console.log(newStudents);
   
};

function ready(){
    $('#add').click(printOne);
    $('#print').click(printAll);
    $('#update').click(checkNotes);
    $('#run').click(checkNotes);    
}

$(document).ready(function(){
    ready();
}) 
