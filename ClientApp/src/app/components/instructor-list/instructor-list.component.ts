import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Observable } from 'rxjs';
import { IInstructorModel } from 'src/app/models/instructor.model';
import { InstructorFormComponent } from '../instructor-detail/instructor-detail.component';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  public instructors$: Observable<IInstructorModel[]>;
  public displayedColumns: string[] = ['name', 'age', 'actions'];

  public constructor(
    private readonly instructorService: InstructorService,
     ) {}

  public ngOnInit(): void {
    this.instructors$ = this.instructorService.getInstructors();
  }

  public deleteInstructor(id: string): void {
    this.instructorService.deleteInstructor(id).subscribe(() => {
      this.instructors$ = this.instructorService.getInstructors();
    });
  }
}
