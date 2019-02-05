'use strict'

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(nameInput: string = 'Jane Doe',
    ageInput: number = 30,
    genderInput: string = 'female') {
    this.name = nameInput;
    this.age = ageInput;
    this.gender = genderInput;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender}`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends (Person) {
  previousOrganization: string;
  skippedDays: number;

  constructor(nameInput: string = 'Jane Doe',
    ageInput: number = 30,
    genderInput: string = 'female',
    previousOrganizationInput: string = 'The School of Life') {
    super(nameInput, ageInput, genderInput)
    this.previousOrganization = previousOrganizationInput;
    this.skippedDays = 0;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends (Person) {
  level: string;

  constructor(nameInput: string = 'Jane Doe',
    ageInput: number = 30,
    genderInput: string = 'female',
    levelInput: string = 'intermediate') {
    super(nameInput, ageInput, genderInput),
      this.level = levelInput
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

class Sponsor extends (Person) {

  company: string;
  hiredStudents: number;

  constructor(nameInput: string = 'Jane Doe',
    ageInput: number = 30,
    genderInput: string = 'female',
    companyInput: string = 'Google') {
    super(nameInput, ageInput, genderInput)
    this.company = companyInput;
    this.hiredStudents = 0
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  hire() {
    this.hiredStudents++
  }
}

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(nameInput: string) {
    this.name = nameInput;
    this.students = [];
    this.mentors = [];
  }

  addStudent(StudentInput: Student) {
    this.students.push(StudentInput)
  }

  addMentor(MentorInput: Mentor) {
    this.mentors.push(MentorInput)
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);

  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();