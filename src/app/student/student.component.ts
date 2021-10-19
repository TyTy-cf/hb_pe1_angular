import {Component, Input, OnInit} from '@angular/core';
import {StudentsService} from "../../service/students.service";
import {Student} from "../../models/interface/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input()
  average!: number;

  arrayStudents: Array<Student> = [];

  constructor(public studentService: StudentsService) { }

  ngOnInit(): void {
    console.log(this.average);
    this.arrayStudents = this.studentService.getStudentsByAverage(this.average);
  }

}
