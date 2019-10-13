import { RouterModule, Routes } from '@angular/router';
import { InstructorFormComponent } from './components/instructor-detail/instructor-detail.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';

const routes: Routes = [
    { path: 'form/:mode/:id', component: InstructorFormComponent },
    { path: 'form/:mode', component: InstructorFormComponent },
    { path: '', component: InstructorListComponent }];

export const routingModule = RouterModule.forRoot(routes);
