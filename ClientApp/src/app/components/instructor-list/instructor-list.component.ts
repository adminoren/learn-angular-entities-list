import { Component, OnInit } from "@angular/core";
import { InstructorService } from "src/app/services/instructor.service";
import { Observable } from "rxjs";
import { InstructorModel } from "src/app/models/instructor.model";
import { ModalService } from 'src/app/shared/Modal/modal.service';
import { InstructorFormComponent } from '../instructor-detail/instructor-detail.component';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  public instructors$: Observable<InstructorModel[]>;
  public displayedColumns: string[] = ['name', 'age', 'actions'];

  public constructor(
    private readonly instructorService: InstructorService,
    private readonly modalService: ModalService
    ) {}

  public ngOnInit(): void {
    this.instructors$ = this.instructorService.getInstructors();
  }

  public edit(instructor: InstructorModel): void {
    const copy: InstructorModel = { ...instructor };
    this.modalService.open({
      component: InstructorFormComponent,
      context: {
        instructor: copy,
        save: () => {
          debugger;
          this.instructorService.updateInstructor(copy)
            .subscribe(() => {
              this.instructors$ = this.instructorService.getInstructors();
            });
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }

  public deleteInstructor(id: string): void {
    this.instructorService.deleteInstructor(id).subscribe(() => {
      this.instructors$ = this.instructorService.getInstructors();
    });
  }
}
