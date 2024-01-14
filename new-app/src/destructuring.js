const students = ["Nico", "Eva", "Rumana"];

//const nico = students[0];
//const eva = students[1];
//const rumana = students[2];

const [nico, eva, rumana] = students;
console.log("1", eva);
const [, eva1, rumana1] = students;
console.log("2", eva1);

//Destructing object
const studentsObj = {
  student1: "Nico",
  student2: "Eva",
  student3: "Rumana",
};

const { student2 } = studentsObj;

console.log("3", student2);

const newStudents = [...students, "Srushti"];
console.log(newStudents);
console.log(students);

const newStudents1 = new Array.from(students);
newStudents1.push("Srushti");

const newStudents2 = students;
console.log(newStudents2);
