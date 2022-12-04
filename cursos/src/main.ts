import { Course } from "./entities/curso.entity";
import {Student} from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";
import { GradeBookSetup } from "./entities/gradeBookSetup";
let students: Student[]=[];

enum Course1{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}
enum Area1{
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}

//FORMULARIO DE ESTUDIANTE
function addStudent ():void{
    let currentStudent : Student = {
        fullname: readFormHtml("fullName"),
        identification: parseInt (readFormHtml("identification")),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml ("level"),
        direction: readFormHtml("direction")
    }
    students.push(currentStudent);
    /*console.log(students)*/
    console.table(students)
}

//clase dos formulario
function readFormHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;
}

//FORMULARIO DE TEACHER

let teachers: Teacher[]=[];

//FORMULARIO DE TEACHER
function addTeacher ():void{
    let currentTeacher : Teacher = {
        fullname: readFormHtml("fullNameTeacher"),
        identification: parseInt (readFormHtml("identificationTeacher")),
        direction: readFormHtml("directionTeacher"),
        title: readFormHtml("title"),
        area: readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
   // console.log(teachers)
   console.table(teachers)
}

//FORMULARIO CURSO

let courses: Course[]=[];

//FORMULARIO DE TEACHER
function addCourse ():void{
    let currentCourse : Course = {
        nameCourse: readFormHtml("nameCourse"),
        parallel:readFormHtml("parallel"),
        hours: parseInt(readFormHtml("hours")),
    }
    courses.push(currentCourse);
    console.table(courses)
}


//libro de notas
let gradesBookSetup: GradeBookSetup[] = [];
function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}


function initCourse():void{
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    let courses = Object.values(Course1);
courses.forEach(
    (value) => {
     let option = document.createElement("option");
       option.value = value;
       option.text = value,
       courseGradeBook.add(option);
    }
);
}
initCourse();
function initArea():void{
    let areaGradeBook = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area1);
areas.forEach(
    (value) => {
     let option = document.createElement("option");
       option.value = value;
       option.text = value,
       areaGradeBook.add(option);
    }
);
}
initArea();
