import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './shared/Modal/modal.module';
import { InstructorFormComponent } from './components/instructor-detail/instructor-detail.component';
import { FormsModule } from '@angular/forms';
import { routingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InstructorListComponent,
    InstructorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule,
    FormsModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
