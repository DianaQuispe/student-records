'use strict';
const app = {
     students : [],    

    setup: function() {
        $('#add').click(app.printOne);
        $('#print').click(app.printAll);
        $('#update').click(app.checkNotes);
        $('#run').click(app.checkNotes);
    },
    printOne : function() {
        app.students.push({
            name : prompt('Student Name:', 'Name'),
            techPoints : prompt('Tech Points:',' 70%'),
            lifePoints : prompt('Life Points:','70%'),
            status : 'active',
        })
        $('#student').empty();  
      $('#student').append(`<div class="addStudents"><h1><b>STUDENT:</b></h1><p><b>Name:</b>${app.students[app.students.length-1].name }</p><p><b>Tech Points</b>:${app.students[app.students.length-1].techPoints }</p><p><b>Life Points:</b>${app.students[app.students.length-1].lifePoints }</p><p><b>Status:</b>${app.students[app.students.length-1].status }</p></div>`)

    },
    printAll : function() {
        $('#student').empty();  
        
        var result = app.students.map((value)=>{
            return $('#student').append(`<div class="printStudents"><h1><b>STUDENT:</b></h1><p><b>Name:</b>${value.name }</p><p><b>Tech Points</b>:${value.techPoints }</p><p><b>Life Points:</b>${value.lifePoints }</p><p><b>Status:</b>${value.status }</p></div>`);
        } )
    },
    checkNotes : function() {
        var newStudents =app.students.filter((value)=>{return (parseInt(value.techPoints)+parseInt(value.lifePoints)/2 >= 70) } )
        $('#student').empty();  
        for(var i in newStudents){
           $('#student').append(`<div class="checkStudents"><h1><b>STUDENT:</b></h1><p><b>Name:</b>${newStudents[i].name }</p><p><b>Tech Points</b>:${newStudents[i].techPoints }</p><p><b>Life Points:</b>${newStudents[i].lifePoints }</p><p><b>Status:</b>${newStudents[i].status }</p></div>`);
       }
       console.log(newStudents);
    }

}    
$(document).ready(app.setup);
