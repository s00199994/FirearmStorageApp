import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gun } from '../interface/gun';

@Injectable({
  providedIn: 'root'
})

export class AwsService {

  private postEndpoint = "https://m7k6uivci3.execute-api.eu-west-1.amazonaws.com/prod"

  constructor(private http: HttpClient) { }

  addData(gun: Gun): Observable<any> {

    // ADD CORS AND FIX CORS ERRORS FROM API GATEWAY
    
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.postEndpoint, gun);
  }
}
