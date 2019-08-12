/* Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() */


class Student {

  learnd() {
    console.log('Student learned');
  }
  question(teacher: Teacher) {
    console.log('Student asked question');
    teacher.answer();
  }
}

class Teacher {

  answer() {
    console.log('Teacher answered the question');
  }

  teach(student: Student) {
    console.log('Teacher told the lesson');
    student.learnd()
  }
}

let student1 = new Student;
let teacher1 = new Teacher;

student1.question(teacher1);
teacher1.teach(student1);
