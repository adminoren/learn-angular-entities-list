import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInstructorModel } from '../models/instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  public constructor(private readonly httpClient: HttpClient) {}

  public getInstructors(): Observable<IInstructorModel[]> {
    return this.httpClient.get<IInstructorModel[]>('api/instructor');
  }

  public getInstructorById(id: string): Observable<IInstructorModel> {
    return this.httpClient.get<IInstructorModel>('api/instructor/' + id);
  }

  public addInstructor(instructor: IInstructorModel): Observable<any> {
    return this.httpClient.post<any>('api/instructor', instructor);
  }

  public updateInstructor(instructor: IInstructorModel): Observable<any> {
    return this.httpClient.put<any>('api/instructor', instructor);
  }

  public deleteInstructor(id: string): Observable<any> {
    return this.httpClient.delete<any>('api/instructor/' + id);
  }
}
