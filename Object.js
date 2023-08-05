var student1={

    name :"Shorna",
    age :27,
    lang:["Bangla ","Hindi"]
}

document.write(student1.name);

// if we want to create multiple object ,we can make a constructor 

function Student (name ,age,cgpa ,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
    
}

var student2= new Student("Nahid",23,3.54,["Bangla","English"]);

console.log(student2.name);
document.write("</br>");
document.write(student2.name);

//adding function inside a constructor 
function Studentt (name ,age,cgpa ,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display=function(){
        document.write(this.name);
        document.write(this.age);

    }
}
var student3= new Studentt("Nahid",23,3.54,["Bangla","English"]);

student3.display();



