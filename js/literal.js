
 const app {

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
    
     $('#print').click(printAll);
    
    function printAll(){
        function map() {
            $('#student').html('');
            $('#student').append(students.map(printAll));
            
        }
        map();
        function printAll(item) {
            return `<div class="printStudents"><h1><b>STUDENT:</b></h1><br><p><b>Name:</b>${item.name }</p><p><b>Tech Points</b>:${item.techPoints }</p><p><b>Life Points:</b>${item.lifePoints }</p><p><b>Status:</b>${item.status }</p></div>`;
        }
      
    }
    
     $('#update').click(checkNotes);
    
    function checkNotes() {
    var newStudent = students.filter(function(number) {
        let int = parseInt(number.techPoints);
        let int1 = parseInt(number.lifePoints);
       let prom = int + int1/ 2;
        return (prom >= 70)
        
    });
    $('#student').html('');
    for(var i in newStudent){
        $('#student').append(`<div class="addStudents"><h1><b>STUDENT:</b></h1><br><p><b>Name:</b>${newStudent[i].name }</p><p><b>Tech Points</b>:${newStudent[i].techPoints }</p><p><b>Life Points:</b>${newStudent[i].lifePoints }</p><p><b>Status:</b>${newStudent[i].status }</p></div>`)
        
    }
    
    
    console.log(newStudent);
    
    }
 }
 