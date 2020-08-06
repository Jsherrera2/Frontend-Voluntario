import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Voluntario } from '../models/voluntario';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  url: string ="https://localhost:44362/api/Voluntario";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor( private http:HttpClient) { }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T> => {
      console.error(error);
      this.log('${operation}failed: ${error.message}');
      return of(result as T);
    };

  }

  private log(message: string){
    console.log(message);

  }


  save(v:Voluntario) : Observable<any> {
    let voluntarioBody = JSON.stringify(v);    
    if(v.idvoluntario === undefined){      
      return this.http.post<any>(this.url, voluntarioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, voluntarioBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Voluntario> {
    return this.http.get<Voluntario>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(v: Voluntario) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + v.idvoluntario, 
      this.httpOptions);
  }

  list(): Observable<Voluntario[]> {
    return this.http.get<Voluntario[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }


}
