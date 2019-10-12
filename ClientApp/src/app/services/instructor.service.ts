import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { InstructorModel } from '../models/instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  public constructor(private readonly httpClient: HttpClient) {}

  public getInstructors(): Observable<InstructorModel[]> {
    return this.httpClient.get<InstructorModel[]>('api/instructor');
  }

  public getInstructorById(id: string): Observable<InstructorModel> {
    return this.httpClient.get<InstructorModel>('api/instructor/' + id);
  }

  public addInstructor(instructor: InstructorModel): Observable<any> {
    return this.httpClient.post<any>('api/instructor', instructor);
  }

  public updateInstructor(instructor: InstructorModel): Observable<any> {
    return this.httpClient.put<any>('api/instructor', instructor);
  }

  public deleteInstructor(id: string): Observable<any> {
    return this.httpClient.delete<any>('api/instructor/' + id);
  }
}
