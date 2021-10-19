import { Injectable } from '@angular/core';
import {Student} from "../models/interface/student";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly _arrayStudents: Array<Student> = [];

  constructor() {
    this._arrayStudents = [
      { name: 'Albert', grades: [12, 8, 9, 7, 13] },
      { name: 'Vincent', grades: [14, 13, 12, 11, 10] },
      { name: 'Michel', grades: [17, 16, 15, 18, 13] },
      { name: 'Paul', grades: [16, 13, 10, 11, 6] },
      { name: 'Elise', grades: [7, 16, 17, 18, 12] },
    ];
  }

  get arrayStudents(): Array<Student> {
    return this._arrayStudents;
  }

  addStudent(student: Student): void {
    this._arrayStudents.push(student);
  }

  getStudentsByAverage(average: number = 10): Array<Student> {
    return this._arrayStudents.filter((student) =>
        this.calcAverage(student.grades) >= average
     );
  }

  calcAverage(arrayGrades: Array<number>): number {
    let sum: number = 0;
    for (const grade of arrayGrades) {
      sum += grade;
    }
    return sum / arrayGrades.length;
  }

}
