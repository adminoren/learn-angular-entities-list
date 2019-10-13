import { Component } from '@angular/core';
import { IInstructorModel } from 'src/app/models/instructor.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorFormComponent {
  public instructor: IInstructorModel = {
    id: '',
    name: '',
    email: '',
    age: 0,
  };
  public editing: boolean = false;

  public constructor(
    activeRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly instructorService: InstructorService
  ) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';

    const id: string = activeRoute.snapshot.params['id'];
    if (id) {
      instructorService
        .getInstructorById(id)
        .subscribe((instructor: IInstructorModel) => {
          this.instructor = instructor;
        });
    }
  }

  public submitForm(form: NgForm): void {
    if (form.valid) {
      const observable: Observable<any> = this.editing
        ? this.instructorService.updateInstructor(this.instructor)
        : this.instructorService.addInstructor(this.instructor);

      observable
        .subscribe(() => {
          this.router.navigateByUrl('/');
        });
    }
  }
}
